import '../styles/card.scss'
import emoji from '../assets/emoji.png'
import Button from "./Button.jsx";
import Emoji from "./Emoji.jsx";
const Card = () => {
	return (
		<section className="card">
			<Emoji/>
			<span className="subtitle">Olá, eu sou o Alê 🤙</span>
			<span className="title">Desenvolvo <span className="highlight">ideias</span> e ajudo a construir um mundo melhor através do software.</span>
			<div className="card-buttons">
				<Button text={"Contact"} href={"#"} class={"btn-primary"}/>
				<Button text={"Télécharger mon CV"} href={"#"} class={"btn-link"}/>
			</div>
		</section>
	);
};

export default Card;
