import Header from "./components/Header.jsx";
import Card from "./components/Card.jsx";
import Projects from "./components/Projects.jsx";
import Heading from "./components/Heading.jsx";
import Description from "./components/Description.jsx";

function App() {

	return (
		<>
			<Header/>
			<div className="container">
				<Card/>
				<Heading title="Derniers projets" heading="h2"/>
				<Projects/>
				<Heading title="Présentation rapide" heading="h2 titlearrow"/>
				<Description/>
			</div>
		</>
	)
}

export default App
