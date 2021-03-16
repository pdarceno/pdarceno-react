import React from "react";
import ObjectiveComponent from './ObjectiveComponent.js';

function Objectives(props) {
	return (
		<div>
			<h1>Objectives</h1>
			<p>My objective is to find a position I can carry out my duties and maximize my skills as a programmer.</p>
			<ObjectiveComponent
				image=""
				description="Help Secure Deals"
			/>
			<ObjectiveComponent
				image=""
				description="Help Improve Client Satisfaction"
			/>
			<ObjectiveComponent
				image=""
				description="Create Responsive Designs"
			/>
			<ObjectiveComponent
				image=""
				description="Help Businesses Grow"
			/>
			<ObjectiveComponent
				image=""
				description="Make Secure Websites"
			/>
		</div>
	);
}

export default Objectives;