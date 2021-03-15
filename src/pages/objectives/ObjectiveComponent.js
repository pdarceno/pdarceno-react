import React from 'react'; // Import the Component component from React
import {Link} from 'react-router-dom'; // Import the Link componen

function ObjectiveThumbnail(props) {
	return (
		<div className="objective">
			<Link to="">
				<div className="objective-image">
					<img src="" alt="Objective Image"/>
				</div>
				<div className="objective-title">""</div>
				<div className="objective-category">""</div>
			</Link>
		</div>
	);
}

export default ObjectiveThumbnail;