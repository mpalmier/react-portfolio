import "../styles/description.scss";
import bigemoji from "../assets/bigemoji.png";
import Skills from "./Skills.jsx";

const Description = () => {
	return (
		<div className="description">
			<div className="left-content">
				<p className="text">Tenho 20 anos, estou em transição de carreira, vindo da área administrativa onde desenvolvi experiência
					com gestão de pessoas, gestão de empresas e negociação com cliente.
					<span>Hoje construo aplicações fullstack!</span>
				</p>
				<Skills/>
			</div>
			<img src={bigemoji} alt="emoji" className="bigemoji"/>
		</div>
	);
};

export default Description;
