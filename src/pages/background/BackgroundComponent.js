import React from 'react'; // Import the Component component from React
// import {Link} from 'react-router-dom'; // Import the Link componen

function BackgroundComponent(props) {
	return (
		<div className="background-educ">
			<div className="background-educ-image">
				<img className="content" src={process.env.PUBLIC_URL + props.image} alt={props.title} /></div>
			<div className="background-educ-panel">
				<div className="background-educ-heading">
					<h4>{props.duration}</h4>
					<h4 className="subheading">{props.company}</h4>
				</div>
			</div>
		</div>
	);
}

export default BackgroundComponent