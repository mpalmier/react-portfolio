
const Cardlogo = (props) => {
	return (
		<div className="card-logo">
			<div className="logo" style={{"background-color":props.color}}>
				<img src={props.img} alt={props.title}/>
			</div>
			{props.title}
		</div>
	);
};

export default Cardlogo;
