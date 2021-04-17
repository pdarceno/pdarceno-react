import React from "react";
import ObjectiveComponent from './ObjectiveComponent.js';

function Objectives(props) {
	return (
		<div>
			<h1>Objectives</h1>
			<p>My objective is to find a position I can carry out my duties and maximize my skills as a programmer.</p>
			<div className="objectives">
				<ObjectiveComponent
					icon="fa fa-handshake"
					description="Help Secure Deals"
				/>
				<ObjectiveComponent
					icon="fa fa-grin-beam"
					description="Help Improve Client Satisfaction"
				/>
				<ObjectiveComponent
					icon="fa fa-laptop"
					description="Create Responsive Designs"
				/>
				<ObjectiveComponent
					icon="fa fa-money-bill-wave"
					description="Help Businesses Grow"
				/>
				<ObjectiveComponent
					icon="fa fa-lock"
					description="Make Secure Websites"
				/>
			</div>
		</div>
	);
}

export default Objectives;