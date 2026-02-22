import { AboutMe } from "../../components/about_me/AboutMe"
import "./home.css"


export const Home = () => {
	return (
		<>
			<div className="container">
				<div className="container home-card">
					<AboutMe />
				</div>
			</div>
		</>
	)

}