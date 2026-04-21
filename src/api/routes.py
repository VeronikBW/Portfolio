"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
import re
import smtplib
from collections import defaultdict, deque
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from time import time
from flask import request, jsonify, Blueprint
from flask_cors import CORS

api = Blueprint('api', __name__)

EMAIL_PATTERN = re.compile(r"^[^@\s]+@[^@\s]+\.[^@\s]+$")
RATE_LIMIT_WINDOW_SEC = 60
RATE_LIMIT_MAX_REQUESTS = 5
REQUEST_LOG = defaultdict(deque)

# Restrict API access to expected front-end origins.
allowed_origins = [
    origin.strip()
    for origin in os.getenv("ALLOWED_ORIGINS", "http://localhost:3000,http://localhost:5173").split(",")
    if origin.strip()
]
CORS(api, origins=allowed_origins, methods=[
     "GET", "POST"], allow_headers=["Content-Type"])


def _is_rate_limited(client_ip):
    now = time()
    attempts = REQUEST_LOG[client_ip]

    while attempts and now - attempts[0] > RATE_LIMIT_WINDOW_SEC:
        attempts.popleft()

    if len(attempts) >= RATE_LIMIT_MAX_REQUESTS:
        return True

    attempts.append(now)
    return False


@api.route('/health', methods=['GET'])
def handle_health():
    return jsonify({"status": "ok"}), 200


@api.route('/contact', methods=['POST'])
def handle_contact():
    client_ip = request.headers.get(
        "X-Forwarded-For", request.remote_addr or "unknown").split(",")[0].strip()
    if _is_rate_limited(client_ip):
        return jsonify({"error": "Demasiadas solicitudes, intenta de nuevo en un minuto"}), 429

    data = request.get_json(silent=True)
    if data is None:
        data = {}
    if not isinstance(data, dict):
        return jsonify({"error": "Formato de payload invalido"}), 400

    # Honeypot: si bots llenan este campo oculto, ignoramos silenciosamente.
    if data.get("website"):
        return jsonify({"message": "Mensaje recibido"}), 202

    name = (data.get('name') or '').strip()
    sender_user_email = (data.get('email') or '').strip()
    message = (data.get('message') or '').strip()

    if not name or not sender_user_email or not message:
        return jsonify({"error": "Todos los campos son obligatorios"}), 400

    if not EMAIL_PATTERN.match(sender_user_email):
        return jsonify({"error": "El correo no tiene un formato valido"}), 400

    if len(name) > 120 or len(sender_user_email) > 120 or len(message) > 3000:
        return jsonify({"error": "El contenido supera la longitud permitida"}), 400

    # Credenciales desde el archivo .env
    smtp_email = os.getenv("SMTP_EMAIL")
    smtp_password = os.getenv("SMTP_PASSWORD")
    receiver_email = os.getenv("CONTACT_RECEIVER_EMAIL")

    if not smtp_email or not smtp_password or not receiver_email:
        return jsonify({"error": "Configuración SMTP incompleta en el servidor"}), 500

    msg = MIMEMultipart()
    msg['From'] = smtp_email
    msg['To'] = receiver_email
    msg['Subject'] = f"Nuevo Contacto Portafolio: {name}"

    body = f"Has recibido un nuevo mensaje desde tu portafolio:\n\nNombre: {name}\nCorreo de contacto: {sender_user_email}\n\nMensaje:\n{message}"
    msg.attach(MIMEText(body, 'plain'))

    try:
        with smtplib.SMTP('smtp.gmail.com', 587, timeout=10) as server:
            server.starttls()
            server.login(smtp_email, smtp_password)
            server.sendmail(smtp_email, receiver_email, msg.as_string())
        return jsonify({"message": "Mensaje enviado con exito"}), 200
    except Exception as e:
        print(f"Error enviando correo: {e}")
        return jsonify({"error": "Hubo un error al enviar el mensaje"}), 500
