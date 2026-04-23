export const initialStore = () => {
  return {
    theme: localStorage.getItem("theme") || "dark",
    language: localStorage.getItem("language") || "es",
    content: {
      es: {
        profile: {
          name: "Verónica Rodríguez",
          role: "Full Stack Developer",
          email: "veronikbw@gmail.com",
          location: "Concepción, Chile",
          phone: "+56 932959180",
          github: "https://github.com/VeronikBW",
          linkedin: "https://www.linkedin.com/in/veronicarodriguez66/",
          about:
            "Full Stack Developer con experiencia en React, Flask y SQLAlchemy. Trayectoria previa como Jefe de Operaciones, especializada en la optimización de flujos de trabajo, gestión de datos y liderazgo de equipos. Enfocada en desarrollar soluciones escalables que aseguren la continuidad operativa y la eficiencia del negocio.",
          cvLink: "/cv-veronica-rodriguez.pdf",
          languages: [
            { name: "Español", level: "Nativo" },
            { name: "Inglés", level: "B2" },
          ],
          skills: [
            "React.js",
            "Flask",
            "Python",
            "SQLAlchemy",
            "JavaScript",
            "HTML5",
            "CSS3",
            "GitHub",
            "Git",
            "Bootstrap",
            "Jest",
            "Restful APIs",
            "JWT",
            "Excel",
            "PowerBI",
          ],
        },
        projects: [
          {
            id: 1,
            title: "Bangover",
            period: "2026",
            link: "https://bangoverrpg.com/",
            description:
              "Plataforma web para una comunidad RPG narrativa +18. Incluye verificación de acceso, perfiles, catálogo de actividades y panel administrativo.",
            image:
              "https://res.cloudinary.com/dzvcmydip/image/upload/v1775254377/Logo_de_p%C3%A1gina_de_inicio_vmyrrk.png",
            imageFit: "contain",
            techs: ["React", "Flask", "Python", "SQLAlchemy", "Bootstrap"],
            details: [
              "Desarrollé una experiencia responsive con acceso restringido y navegación clara.",
              "Implementé autenticación, perfiles de usuario y persistencia de sesión.",
              "Construí listado de miembros, favoritos y catálogo de actividades dinámico.",
              "Integré frontend en React con backend en Flask para un despliegue full stack.",
            ],
          },
          {
            id: 2,
            title: "Patitas Felices",
            period: "2025",
            link: "https://sample-service-name-siok.onrender.com/",
            description:
              "Plataforma web responsive para un refugio de animales. Incluye sistema de registro, perfiles de mascotas y panel administrativo.",
            image:
              "https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&q=80&w=800",
            techs: ["React", "Node.js", "CSS Flexible", "JWT", "PayPal API"],
            details: [
              "Desarrollé una plataforma web responsive con experiencia fluida.",
              "Implementé registro y perfiles con JWT y bases relacionales.",
              "Integré la API de PayPal para donativos seguros.",
              "Construí un dashboard administrativo con control de acceso por roles.",
            ],
          },
        ],
        experience: [
          {
            role: "Jefe de operaciones",
            company: "Oxxo Chile",
            period: "2023 – actualidad",
            location: "Concepción, Chile",
            achievements: [
              "Supervisé equipos operativos manteniendo estándares de servicio.",
              "Implementé control de inventario.",
              "Mantuve metas de venta entre 102% y 105%.",
              "Gestioné logística de talento humano y recursos materiales.",
            ],
          },
          {
            role: "Gerente de operaciones",
            company: "Café 'Dulcestela'",
            period: "2020 – 2023",
            location: "Concepción, Chile",
            achievements: [
              "Gestioné control de stock y compra de insumos sistemática.",
              "Automaticé organización de turnos y coordinación de equipos.",
              "Resolví incidencias operativas y soporte directo al usuario.",
            ],
          },
        ],
        education: [
          {
            title: "Iniciación de Desarrollo con IA",
            institution: "Big School",
            period: "2026",
            location: "Concepción, Chile",
          },
          {
            title: "Full Stack Developer",
            institution: "4Geeks Academy",
            period: "2025",
            location: "Concepción, Chile",
          },
          {
            title: "Introducción a Programación con Python",
            institution: "Academia Desafío Latam",
            period: "2025",
            location: "Concepción, Chile",
          },
        ],
        ui: {
          nav: {
            skills: "Skills",
            projects: "Proyectos",
            experience: "Experiencia",
            contact: "Contacto",
          },
          hero: {
            greeting: "Hola, soy",
            downloadCv: "Descargar CV",
            contactMe: "Contactar",
          },
          sections: {
            skills: "Mis Habilidades",
            projects1: "Proyectos",
            projects2: "Destacados",
            liveProject: "Ver Proyecto en vivo",
            exp1: "Experiencia",
            exp2: "Profesional",
            edu: "Educación",
            contact1: "Ponte en",
            contact2: "Contacto",
          },
          contact: {
            title: "Hablemos de tu próximo proyecto",
            desc: "Estoy disponible para nuevos desafíos profesionales y oportunidades de colaboración.",
            emailLabel: "Email",
            locationLabel: "Ubicación",
            formName: "Nombre Completo",
            formNamePh: "Ej. Juan Pérez",
            formEmail: "Correo Electrónico",
            formEmailPh: "tucorreo@ejemplo.com",
            formMsg: "Mensaje",
            formMsgPh: "¿En qué puedo ayudarte?",
            sendBtn: "Enviar Mensaje",
            sendingBtn: "Enviando...",
            successTitle: "¡Mensaje Enviado!",
            successDesc:
              "Gracias por contactarme. Te responderé lo antes posible a",
            sendAnother: "Enviar otro mensaje",
            errorMsg:
              "Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.",
          },
          footer: "Hecho con ❤️ por Verónica",
        },
      },
      en: {
        profile: {
          name: "Verónica Rodríguez",
          role: "Full Stack Developer",
          email: "veronikbw@gmail.com",
          location: "Concepcion, Chile",
          phone: "+56 932959180",
          github: "https://github.com/VeronikBW",
          linkedin: "https://www.linkedin.com/in/veronicarodriguez66/",
          about:
            "Full Stack Developer with experience in React, Flask, and SQLAlchemy. Previous background as Operations Manager, specialized in workflow optimization, data management, and team leadership. Focused on developing scalable solutions that ensure operational continuity and business efficiency.",
          cvLink: "/cv-veronica-rodriguez-en.pdf",
          languages: [
            { name: "Spanish", level: "Native" },
            { name: "English", level: "B2" },
          ],
          skills: [
            "React.js",
            "Flask",
            "Python",
            "SQLAlchemy",
            "JavaScript",
            "HTML5",
            "CSS3",
            "GitHub",
            "Git",
            "Bootstrap",
            "Jest",
            "Restful APIs",
            "JWT",
            "Excel",
            "PowerBI",
          ],
        },
        projects: [
          {
            id: 1,
            title: "Bangover",
            period: "2026",
            link: "https://bangoverrpg.com/",
            description:
              "Web platform for a narrative +18 RPG community. Includes access verification, user profiles, activity catalog, and admin tools.",
            image:
              "https://res.cloudinary.com/dzvcmydip/image/upload/v1775254377/Logo_de_p%C3%A1gina_de_inicio_vmyrrk.png",
            imageFit: "contain",
            techs: ["React", "Flask", "Python", "SQLAlchemy", "Bootstrap"],
            details: [
              "Built a responsive experience with restricted access and clear navigation.",
              "Implemented authentication, user profiles, and session persistence.",
              "Created member listing, favorites, and a dynamic activity catalog.",
              "Integrated a React frontend with a Flask backend for a full stack deployment.",
            ],
          },
          {
            id: 2,
            title: "Happy Paws",
            period: "2025",
            link: "https://sample-service-name-siok.onrender.com/",
            description:
              "Responsive web platform for an animal shelter. Includes registration system, pet profiles, and administrative dashboard.",
            image:
              "https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&q=80&w=800",
            techs: ["React", "Node.js", "Flexible CSS", "JWT", "PayPal API"],
            details: [
              "Developed a responsive web platform ensuring a smooth experience.",
              "Implemented registration and profiles using JWT and relational databases.",
              "Integrated PayPal API for secure donations.",
              "Built an administrative dashboard with role-based access control.",
            ],
          },
        ],
        experience: [
          {
            role: "Operations Manager",
            company: "Oxxo Chile",
            period: "2023 – present",
            location: "Concepcion, Chile",
            achievements: [
              "Supervised operational teams maintaining service standards.",
              "Implemented inventory control.",
              "Maintained sales goals between 102% and 105%.",
              "Managed human talent logistics and material resources.",
            ],
          },
          {
            role: "Operations Manager",
            company: "Café 'Dulcestela'",
            period: "2020 – 2023",
            location: "Concepcion, Chile",
            achievements: [
              "Managed stock control and systematic purchasing of supplies.",
              "Automated shift organization and team coordination.",
              "Resolved operational issues and provided direct user support.",
            ],
          },
        ],
        education: [
          {
            title: "AI Development Initiation",
            institution: "Big School",
            period: "2026",
            location: "Concepcion, Chile",
          },
          {
            title: "Full Stack Developer",
            institution: "4Geeks Academy",
            period: "2025",
            location: "Concepcion, Chile",
          },
          {
            title: "Introduction to Python Programming",
            institution: "Desafío Latam Academy",
            period: "2025",
            location: "Concepcion, Chile",
          },
        ],
        ui: {
          nav: {
            skills: "Skills",
            projects: "Projects",
            experience: "Experience",
            contact: "Contact",
          },
          hero: {
            greeting: "Hi, I'm",
            downloadCv: "Download CV",
            contactMe: "Contact Me",
          },
          sections: {
            skills: "My Skills",
            projects1: "Featured",
            projects2: "Projects",
            liveProject: "View Live Project",
            exp1: "Professional",
            exp2: "Experience",
            edu: "Education",
            contact1: "Get in",
            contact2: "Touch",
          },
          contact: {
            title: "Let's talk about your next project",
            desc: "I am available for new professional challenges and collaboration opportunities.",
            emailLabel: "Email",
            locationLabel: "Location",
            formName: "Full Name",
            formNamePh: "e.g. John Doe",
            formEmail: "Email Address",
            formEmailPh: "yourmail@example.com",
            formMsg: "Message",
            formMsgPh: "How can I help you?",
            sendBtn: "Send Message",
            sendingBtn: "Sending...",
            successTitle: "Message Sent!",
            successDesc:
              "Thanks for reaching out. I'll get back to you soon at",
            sendAnother: "Send another message",
            errorMsg:
              "There was an error sending the message. Please try again.",
          },
          footer: "Made with ❤️ by Verónica",
        },
      },
    },
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "set_theme":
      localStorage.setItem("theme", action.payload);
      return { ...store, theme: action.payload };
    case "set_language":
      localStorage.setItem("language", action.payload);
      return { ...store, language: action.payload };
    default:
      return store;
  }
}
