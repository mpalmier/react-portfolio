
const Tag = (props) => {
	return (
		<div className={props.tag.color+" tag"}>{props.tag.nom}</div>
	);
};

export default Tag;
