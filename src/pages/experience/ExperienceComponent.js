import React from 'react'; // Import the Component component from React
// import {Link} from 'react-router-dom'; // Import the Link componen

function ExperienceComponent(props) {
	return (
		<div className="experience">
			<div className="experience-image">
				<img className="content" src={process.env.PUBLIC_URL + props.image} alt={props.title}/>
			</div>
			<div className="experience-title">{props.title}</div>
			<div className="experience-company">{props.company}</div>
		</div>
	);
}

export default ExperienceComponent;
