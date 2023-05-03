import '../styles/card.scss'
import emoji from '../assets/emoji.png'
import Button from "./Button.jsx";
import Emoji from "./Emoji.jsx";
const Card = () => {
	return (
		<section className="card">
			<Emoji/>
			<span className="subtitle">Bonjour, je suis Mathéo 🤙</span>
			<span className="title">Je <span className="highlight">développe</span> des idées et aide à construire un monde meilleur grâce aux logiciels.</span>
			<div className="card-buttons">
				<Button text={"Contact"} href={"#"} class={"btn-primary"}/>
				<Button text={"Télécharger mon CV"} href={"#"} class={"btn-link"}/>
			</div>
		</section>
	);
};

export default Card;
