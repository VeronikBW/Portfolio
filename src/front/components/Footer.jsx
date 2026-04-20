import useGlobalReducer from "../hooks/useGlobalReducer";

export const Footer = () => {
	const { store } = useGlobalReducer();
	const content = store.content[store.language] || store.content["es"];

	return (
		<footer className="footer mt-auto py-4 text-center glass-footer">
			<div className="container">
				<p className="mb-2 fw-bold text-gradient fs-5">Verónica Rodríguez</p>
				<p className="text-muted small">
					© {new Date().getFullYear()} - {content.ui.footer}
				</p>
				<div className="d-flex justify-content-center gap-3 mt-3">
					<a href="https://github.com/VeronikBW" target="_blank" rel="noopener noreferrer" className="text-muted"><i className="fab fa-github fs-4"></i></a>
					<a href="https://www.linkedin.com/in/veronicarodriguez66/" target="_blank" rel="noopener noreferrer" className="text-muted"><i className="fab fa-linkedin fs-4"></i></a>
				</div>
			</div>
		</footer>
	);
};
