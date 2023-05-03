import logo from '../assets/logo.png'
import '../styles/header.scss'
import Menu from "./Menu.jsx";

const Header = () => {
	return (
		<header className="container">
			<img src={logo} alt="Logo"/>
			<Menu/>
		</header>
	);
};

export default Header;
