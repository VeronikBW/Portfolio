import { useState } from "react";
import useGlobalReducer from "../../hooks/useGlobalReducer";
import "./home.css";

export const Home = () => {
	const { store } = useGlobalReducer();
	const content = store.content[store.language] || store.content["es"];
	const { profile, projects, experience, education, ui } = content;

	const [formData, setFormData] = useState({ name: "", email: "", message: "" });
	const [status, setStatus] = useState("idle"); // idle, loading, success, error

	const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

	const handleSubmit = async (e) => {
		e.preventDefault();
		setStatus("loading");
		try {
			const response = await fetch(import.meta.env.VITE_BACKEND_URL + "/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData)
			});
			if (response.ok) {
				setStatus("success");
			} else {
				setStatus("error");
			}
		} catch (error) {
			setStatus("error");
		}
	};

	return (
		<div className="container-fluid p-0">
			{/* Hero Section */}
			<section className="hero-section section-container">
				<div className="row justify-content-center align-items-center">
					<div className="col-lg-8">
						<span className="badge rounded-pill bg-info-subtle text-info px-3 py-2 mb-3">
							🚀 {store.language === "es" ? "Disponible para nuevos desafíos" : "Available for new challenges"}
						</span>
						<h1 className="hero-title fw-bold">
							{ui.hero.greeting} <span className="text-gradient">{profile.name}</span> <br />
							<span className="fs-2">{profile.role}</span>
						</h1>
						<p className="hero-subtitle mb-4">
							{profile.about}
						</p>
						<div className="d-flex flex-wrap gap-3 justify-content-center">
							<a href="#projects" className="btn-primary text-center" style={{ minWidth: "160px" }}>
								{ui.nav.projects}
							</a>
							<a href={profile.cvLink} target="_blank" rel="noopener noreferrer" className="btn-primary text-center" style={{ minWidth: "160px" }}>
								<i className="fas fa-file-pdf me-2"></i>{ui.hero.downloadCv}
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* Skills Section */}
			<section id="skills" className="section-container surface-bg rounded-5 my-5">
				<h2 className="text-center mb-5 fs-1 fw-bold">{ui.sections.skills}</h2>
				<div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
					{profile.skills.map((skill, idx) => (
						<div key={idx} className="glass px-4 py-3 fw-bold shadow-sm hover-up">
							{skill}
						</div>
					))}
				</div>

				<h3 className="text-center mb-4 fs-3 fw-bold">{store.language === "es" ? "Idiomas" : "Languages"}</h3>
				<div className="d-flex flex-wrap justify-content-center gap-4">
					{profile.languages.map((lang, idx) => (
						<div key={idx} className="glass px-4 py-3 shadow-sm d-flex align-items-center gap-3">
							<div className="bg-primary-glow text-primary rounded-circle d-flex justify-content-center align-items-center" style={{ width: "40px", height: "40px" }}>
								<i className="fas fa-language fs-5"></i>
							</div>
							<div>
								<p className="mb-0 fw-bold">{lang.name}</p>
								<p className="mb-0 small text-muted">{lang.level}</p>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* Projects Section */}
			<section id="projects" className="section-container">
				<h2 className="text-center mb-5 fs-1 fw-bold">{ui.sections.projects1} <span className="text-gradient">{ui.sections.projects2}</span></h2>
				<div className="row g-4">
					{projects.map((project) => (
						<div key={project.id} className="col-md-12">
							<div className="project-card glass d-flex flex-column flex-lg-row overflow-hidden h-100">
								<img src={project.image} alt={project.title} className="project-image-full" />
								<div className="p-5">
									<div className="d-flex justify-content-between align-items-start mb-3">
										<h3 className="h2 mb-0">{project.title}</h3>
										<span className="badge bg-primary-glow text-primary">{project.period}</span>
									</div>
									<p className="text-muted fs-5 mb-4">{project.description}</p>
									<ul className="mb-4">
										{project.details.map((detail, i) => (
											<li key={i} className="mb-2 text-muted">{detail}</li>
										))}
									</ul>
									<div className="d-flex flex-wrap gap-2 mb-4">
										{project.techs.map((tech, idx) => (
											<span key={idx} className="tech-badge">{tech}</span>
										))}
									</div>
									{project.link && (
										<a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary d-inline-flex align-items-center mt-2 fw-semibold" style={{ borderRadius: "10px" }}>
											{ui.sections.liveProject} <i className="fas fa-external-link-alt ms-2"></i>
										</a>
									)}
								</div>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* Experience Section */}
			<section id="experience" className="section-container">
				<h2 className="text-center mb-5 fs-1 fw-bold">{ui.sections.exp1} <span className="text-gradient">{ui.sections.exp2}</span></h2>
				<div className="row justify-content-center">
					<div className="col-lg-10">
						{experience.map((exp, idx) => (
							<div key={idx} className="project-card glass overflow-hidden mb-3">
								<div className="p-4">
									<div className="d-flex flex-wrap justify-content-between align-items-center mb-3 gap-2">
										<div>
											<h3 className="h4 fw-bold mb-0">{exp.role}</h3>
											<p className="text-primary small fw-semibold mt-1 mb-0">
												{exp.company} <span className="text-muted fw-normal ms-2"><i className="fas fa-map-marker-alt me-1"></i>{exp.location}</span>
											</p>
										</div>
										<span className="badge bg-primary-glow text-primary px-3 py-2">{exp.period}</span>
									</div>
									<ul className="mb-0 small ps-3">
										{exp.achievements.map((item, i) => (
											<li key={i} className="text-muted mb-1">{item}</li>
										))}
									</ul>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Education Section */}
			<section className="section-container mb-5">
				<h2 className="text-center mb-5 fs-1 fw-bold">{ui.sections.edu}</h2>
				<div className="row g-4">
					{education.map((edu, idx) => (
						<div key={idx} className="col-md-4">
							<div className="glass p-4 h-100">
								<p className="text-primary fw-bold mb-1">{edu.period}</p>
								<h4 className="h5 fw-bold">{edu.title}</h4>
								<p className="text-muted mb-0">{edu.institution}</p>
								<p className="small text-muted">{edu.location}</p>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* Contact Section */}
			<section id="contact" className="section-container">
				<h2 className="text-center mb-5 fs-1 fw-bold">{ui.sections.contact1} <span className="text-gradient">{ui.sections.contact2}</span></h2>
				<div className="row g-4 justify-content-center">
					{/* Lado Izquierdo: Info Directa */}
					<div className="col-lg-4 col-md-5">
						<div className="glass p-5 h-100 d-flex flex-column justify-content-center">
							<h3 className="h4 fw-bold mb-4">{ui.contact.title}</h3>
							<p className="text-muted mb-5">
								{ui.contact.desc}
							</p>

							<div className="d-flex align-items-center mb-4">
								<div className="bg-primary-glow text-primary rounded-circle d-flex justify-content-center align-items-center me-3" style={{ width: "45px", height: "45px" }}>
									<i className="fas fa-envelope"></i>
								</div>
								<div>
									<p className="small text-muted mb-0">{ui.contact.emailLabel}</p>
									<a href={`mailto:${profile.email}`} className="fw-semibold text-decoration-none hover-up d-inline-block">{profile.email}</a>
								</div>
							</div>

							<div className="d-flex align-items-center">
								<div className="bg-primary-glow text-primary rounded-circle d-flex justify-content-center align-items-center me-3" style={{ width: "45px", height: "45px" }}>
									<i className="fas fa-map-marker-alt"></i>
								</div>
								<div>
									<p className="small text-muted mb-0">{ui.contact.locationLabel}</p>
									<p className="fw-semibold mb-0">{profile.location}</p>
								</div>
							</div>
						</div>
					</div>

					{/* Lado Derecho: Formulario */}
					<div className="col-lg-6 col-md-7">
						<div className="glass p-5 h-100">
							{status === "success" ? (
								<div className="d-flex flex-column align-items-center justify-content-center h-100 text-center">
									<div className="bg-success text-white rounded-circle d-flex justify-content-center align-items-center mb-4" style={{ width: "80px", height: "80px", fontSize: "2rem" }}>
										<i className="fas fa-check"></i>
									</div>
									<h3 className="h4 fw-bold">{ui.contact.successTitle}</h3>
									<p className="text-muted">{ui.contact.successDesc} {formData.email}.</p>
									<button onClick={() => {
										setStatus("idle");
										setFormData({ name: "", email: "", message: "" });
									}} className="btn btn-outline-primary mt-3">{ui.contact.sendAnother}</button>
								</div>
							) : (
								<form onSubmit={handleSubmit}>
									{status === "error" && (
										<div className="alert alert-danger py-2 small" role="alert">
											{ui.contact.errorMsg}
										</div>
									)}
									<div className="mb-4">
										<label htmlFor="name" className="form-label fw-semibold">{ui.contact.formName}</label>
										<input type="text" className="glass-input" id="name" name="name" value={formData.name} onChange={handleChange} placeholder={ui.contact.formNamePh} required />
									</div>
									<div className="mb-4">
										<label htmlFor="email" className="form-label fw-semibold">{ui.contact.formEmail}</label>
										<input type="email" className="glass-input" id="email" name="email" value={formData.email} onChange={handleChange} placeholder={ui.contact.formEmailPh} required />
									</div>
									<div className="mb-4">
										<label htmlFor="message" className="form-label fw-semibold">{ui.contact.formMsg}</label>
										<textarea className="glass-input" id="message" name="message" value={formData.message} onChange={handleChange} rows="4" placeholder={ui.contact.formMsgPh} required></textarea>
									</div>
									<button type="submit" className="btn-primary w-100 d-flex justify-content-center align-items-center gap-2" disabled={status === "loading"}>
										{status === "loading" ? ui.contact.sendingBtn : ui.contact.sendBtn}
										{status !== "loading" && <i className="fas fa-paper-plane"></i>}
									</button>
								</form>
							)}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};