import Heading from "./Heading.jsx";
import Cardlogo from "./Cardlogo.jsx";
import react from "../assets/react.png";
import nodejs from "../assets/node-js.png";


const Skills = () => {
	return (
		<div>
			<Heading title="Compétences" heading="h3"/>
			<div className="logos">
				<Cardlogo img={react} title="React" color="#38BDF8"/>
				<Cardlogo img={nodejs} title="Node-js" color="#83CD29"/>
				<Cardlogo img={react} title="React" color="#38BDF8"/>

			</div>
		</div>
	);
};

export default Skills;
