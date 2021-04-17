import React from 'react'; // Import the Component component from React
// import {Link} from 'react-router-dom'; // Import the Link componen

function BackgroundComponent(props) {
	return (
		<div className="background">
			<div className="background-image">
				<img src={props.image} alt={props.company}/>
			</div>
			<div className="background-company">{props.company}</div>
			<div className="background-duration">{props.duration}</div>
		</div>
	);
}

export default BackgroundComponent