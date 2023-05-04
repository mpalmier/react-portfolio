import '../styles/projects.scss';
import Cardproject from "./Cardproject.jsx";
import {useEffect, useState} from "react";
const Projects = () => {
	const [projets, setData] = useState([]);

	useEffect(() => {
		fetch('src/data/projects.json')
			.then(response => response.json())
			.then(data => setData(data.projets))
			.catch(error => console.error(error));
	}, []);

	return (
		<section className="projects">
			<h2>Derniers projets</h2>
			{projets.map((projet) => (
				<Cardproject nom={projet.nom} image={projet.image} github_link={projet.github_link} deploy_link={projet.deploy_link} color={projet.color} tags={projet.tags}/>
			))}
		</section>
	);
};

export default Projects;
