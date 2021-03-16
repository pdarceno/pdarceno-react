import React from 'react'; // Import the Component component from React
import {Link} from 'react-router-dom'; // Import the Link componen

function ObjectiveComponent(props) {
	return (
		<div className="objective">
			<div className="objective-image">
				<img src={props.image} alt={props.description}/>
			</div>
			<div className="objective-description">{props.description}</div>
		</div>
	);
}

export default ObjectiveComponent;