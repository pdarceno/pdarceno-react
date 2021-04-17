import React from 'react'; // Import the Component component from React
// import {Link} from 'react-router-dom'; // Import the Link componen

function SkillsComponent(props) {
	return (
		<div className="skills">
			<div className="skills-image">
				<img src={props.image} alt={props.skill}/>
			</div>
			<div className="skills-title">{props.skill}</div>
			<div className="skills-company">{props.description}</div>
		</div>
	);
}

export default SkillsComponent;