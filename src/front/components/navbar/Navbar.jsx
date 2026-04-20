import { Link } from "react-router-dom";
import useGlobalReducer from "../../hooks/useGlobalReducer";

export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer();
	
	const content = store.content[store.language] || store.content["es"];
	const { ui } = content;

	const toggleTheme = () => {
		const newTheme = store.theme === "dark" ? "light" : "dark";
		dispatch({ type: "set_theme", payload: newTheme });
	};

	const toggleLanguage = () => {
		const newLang = store.language === "es" ? "en" : "es";
		dispatch({ type: "set_language", payload: newLang });
	};

	return (
		<nav className="navbar navbar-expand-lg fixed-top glass-nav py-2">
			<div className="container-fluid px-4">
				<Link to="/" className="navbar-brand fw-bold text-gradient fs-3">
					Verónica.Dev
				</Link>
				<button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ms-auto align-items-center">
						<li className="nav-item mx-2">
							<a className="nav-link" href="#skills">{ui.nav.skills}</a>
						</li>
						<li className="nav-item mx-2">
							<a className="nav-link" href="#projects">{ui.nav.projects}</a>
						</li>
						<li className="nav-item mx-2">
							<a className="nav-link" href="#experience">{ui.nav.experience}</a>
						</li>
						<li className="nav-item mx-2">
							<a className="nav-link" href="#contact">{ui.nav.contact}</a>
						</li>
						<li className="nav-item ms-lg-3 d-flex align-items-center gap-2">
							<button 
								onClick={toggleLanguage} 
								className="btn btn-outline-primary rounded-circle d-flex align-items-center justify-content-center p-0 fw-bold" 
								style={{width: "40px", height: "40px", fontSize: "14px"}}
								aria-label="Toggle language"
							>
								{store.language === "es" ? "EN" : "ES"}
							</button>
							<button 
								onClick={toggleTheme} 
								className="btn btn-outline-primary rounded-circle d-flex align-items-center justify-content-center p-0" 
								style={{width: "40px", height: "40px"}}
								aria-label="Toggle theme"
							>
								<i className={`fas ${store.theme === "dark" ? "fa-sun" : "fa-moon"}`}></i>
							</button>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};