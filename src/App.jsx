import Header from "./components/Header.jsx";
import Card from "./components/Card.jsx";
import Projects from "./components/Projects.jsx";

function App() {

	return (
		<>
			<Header/>
			<div className="container">
				<Card/>
				<Projects/>
			</div>
		</>
	)
}

export default App
