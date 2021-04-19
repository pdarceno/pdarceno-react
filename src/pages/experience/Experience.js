import React from "react";
import ExperienceComponent from './ExperienceComponent.js';

function Experience(props) {
	return (
		<div>
			<h1>Experience</h1>
			<div className="experiences">
				<ExperienceComponent
					image="/images/experiences/Virnew.png"
					title="Virnew"
					company="Mobile Optima Inc."
				/>
				<ExperienceComponent
					image="/images/experiences/Virnew.png"
					title="Virnew Booths"
					company="Mobile Optima Inc."
				/>
				<ExperienceComponent
					image="/images/experiences/UP.png"
					title="Job Seeker Website"
					company="University of the Philippines"
				/>
				<ExperienceComponent
					image="/images/experiences/UP.png"
					title="Interactive News Website"
					company="University of the Philippines"
				/>
				<ExperienceComponent
					image="/images/experiences/UP.png"
					title="Sports Management Website"
					company="University of the Philippines"
				/>
				<ExperienceComponent
					image="/images/experiences/PHIVOLCS.png"
					title="Internship"
					company="PHIVOLCS"
				/>
			</div>
		</div>
	);
}

export default Experience;