import React from "react";
import BackgroundComponent from './BackgroundComponent.js';

function Background(props) {
	return (
		<div>
			<h1>EDUCATION & BACKGROUND</h1>
			<BackgroundComponent
				image=""
				company="Pasig Catholic College"
				duration="2002-2010"
			/>
			<BackgroundComponent
				image=""
				company="City of Mandaluyong Science High School"
				duration="2010-2014"
			/>
			<BackgroundComponent
				image=""
				company="University of the Philippines"
				duration="2014-2019"
			/>
			<BackgroundComponent
				image=""
				company="Mobile Optima Inc."
				duration="2019-Present"
			/>
		</div>
	);
}

export default Background;