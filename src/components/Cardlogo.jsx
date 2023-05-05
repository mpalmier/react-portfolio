
const Cardlogo = (props) => {
	return (
		<div className="card-logo">
			<div className="logo" style={{"background-color":props.color}}>
				<img className={props.animation} src={props.img} alt={props.title}/>
			</div>
			{props.title}
		</div>
	);
};

export default Cardlogo;
