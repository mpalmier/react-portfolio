import '../styles/card.scss'
import emoji from '../assets/emoji.png'
import Button from "./Button.jsx";
const Card = () => {
	return (
		<section className="card">
			<img src={emoji} alt="Emoji"/>
			<div className="card-buttons">
				<Button text={"Contact"} href={"#"} class={"btn-primary"}/>
				<Button text={"Télécharger mon CV"} href={"#"} class={"btn-link"}/>
			</div>
		</section>
	);
};

export default Card;
