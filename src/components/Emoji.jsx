import emoji from '../assets/emoji.png'
import '../styles/emoji.scss'
const Emoji = () => {
	return (
		<div className="emoji">
			<img src={emoji} alt="Emoji"/>
		</div>
	);
};

export default Emoji;
