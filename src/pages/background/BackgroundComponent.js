import React from 'react'; // Import the Component component from React
// import {Link} from 'react-router-dom'; // Import the Link componen

function BackgroundComponent(props) {
	return (
		<li>
			<div className="timeline-image"><img src="assets/img/about/pcc.jpg" alt="" /></div>
			<div className="timeline-panel">
				<div className="timeline-heading">
					<h4>{props.duration}</h4>
					<h4 className="subheading">{props.company}</h4>
				</div>
			</div>
		</li>
	);
}

export default BackgroundComponent