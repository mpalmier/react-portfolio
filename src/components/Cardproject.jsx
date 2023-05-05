import '../styles/cardproject.scss'
import '../styles/tags.scss'
import Tag from "./Tag.jsx";
import Button from "./Button.jsx";
const Cardproject = (props) => {
	const { nom, image, github_link, deploy_link, color, tags } = props;

	return (
		<div className="card-project">
			<h3>{nom}</h3>
			<div className="taglist">
				{tags && tags.map((tag, index) => (
					<Tag tag={tag}/>
				))}
			</div>
			<div className={"project-image "+color}><img src={image} alt={nom}/></div>
			<div className="projects-links">
				<Button text="Github" href={github_link} class={"btn-link github"}/>
				<Button text="Démo" href={deploy_link} class={"btn-link deploy"}/>
			</div>

		</div>
	);
};
export default Cardproject;
