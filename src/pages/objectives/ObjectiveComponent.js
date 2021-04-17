import React from 'react'; // Import the Component component from React
// import {Link} from 'react-router-dom'; // Import the Link componen

function ObjectiveComponent(props) {
	return (
		<div className="objective">
			<span className="objective-image fa-stack">
				<i className={`content ${props.icon}`}></i>
			</span>
			<div className="objective-description">{props.description}</div>
		</div>
	);
}

export default ObjectiveComponent;