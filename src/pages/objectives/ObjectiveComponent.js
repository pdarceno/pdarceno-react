import React from 'react'; // Import the Component component from React
// import {Link} from 'react-router-dom'; // Import the Link componen

function ObjectiveComponent(props) {
	return (
		<div className="objective">
			<div className="objective-image-container">
				<div className="objective-image mobile">
					<i className={`content ${props.icon}`}></i>
				</div>
				<div className="objective-image desktop">
					<i className={`content fa-3x ${props.icon}`}></i>
				</div>
			</div>
			<div className="objective-description">{props.description}</div>
		</div>
	);
}

export default ObjectiveComponent;