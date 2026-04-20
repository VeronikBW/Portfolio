"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():
    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }
    return jsonify(response_body), 200

@api.route('/contact', methods=['POST'])
def handle_contact():
    data = request.get_json()
    name = data.get('name')
    sender_user_email = data.get('email')
    message = data.get('message')

    if not name or not sender_user_email or not message:
        return jsonify({"error": "Todos los campos son obligatorios"}), 400

    # Credenciales desde el archivo .env
    smtp_email = os.getenv("SMTP_EMAIL")
    smtp_password = os.getenv("SMTP_PASSWORD")
    
    if not smtp_email or not smtp_password:
        return jsonify({"error": "Configuración SMTP incompleta en el servidor"}), 500

    # Siempre enviaremos el correo a ti misma (Verónica)
    receiver_email = "veronikbw@gmail.com"

    msg = MIMEMultipart()
    msg['From'] = smtp_email
    msg['To'] = receiver_email
    msg['Subject'] = f"🎯 Nuevo Contacto Portafolio: {name}"

    body = f"Has recibido un nuevo mensaje desde tu portafolio:\n\nNombre: {name}\nCorreo de contacto: {sender_user_email}\n\nMensaje:\n{message}"
    msg.attach(MIMEText(body, 'plain'))

    try:
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()
        server.login(smtp_email, smtp_password)
        text = msg.as_string()
        server.sendmail(smtp_email, receiver_email, text)
        server.quit()
        return jsonify({"message": "¡Mensaje enviado con éxito!"}), 200
    except Exception as e:
        print(f"Error enviando correo: {e}")
        return jsonify({"error": "Hubo un error al enviar el mensaje"}), 500
