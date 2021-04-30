import React from 'react'; // Import the Component component from React
// import {Link} from 'react-router-dom'; // Import the Link componen

function SkillsComponent(props) {
	return (
		<div className="skill">
			<div className="skill-inner">
				<div className="skill-front">
					<img className="skill-image" src={process.env.PUBLIC_URL + props.image} alt={props.skill}/>
				</div>
				<div className="skill-back">
					<div className="skill-title">{props.skill}</div>
					<div className="skill-company">{props.description}</div>
				</div>
			</div>
		</div>
	);
}

export default SkillsComponent;