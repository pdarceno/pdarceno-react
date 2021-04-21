import React from "react";
import BackgroundComponent from './BackgroundComponent.js';

function Background(props) {
	return (
		<div>
			<h1>EDUCATION & BACKGROUND</h1>
			<div className="background-educ-container">
				<BackgroundComponent
					image="/images/education/pcc.jpg"
					company="Pasig Catholic College"
					duration="2002-2010"
				/>
				<BackgroundComponent
					image="/images/education/mandsci.jfif"
					company="City of Mandaluyong Science High School"
					duration="2010-2014"
				/>
				<BackgroundComponent
					image="/images/experiences/UP.png"
					company="University of the Philippines"
					duration="2014-2019"
				/>
				<BackgroundComponent
					image="/images/education/moi.png"
					company="Mobile Optima Inc."
					duration="2019-Present"
				/>
			</div>
		</div>
	);
}

export default Background;