import React from "react";
import ExperienceComponent from './ExperienceComponent.js';

function Experience(props) {
	return (
		<div>
			<h1>Experience</h1>
			<div className="experiences">
				<ExperienceComponent
					image="assets/img/portfolio/Virnew.png"
					title="Virnew"
					company="Mobile Optima Inc."
				/>
				<ExperienceComponent
					image=""
					title="Virnew Booths"
					company="Mobile Optima Inc."
				/>
				<ExperienceComponent
					image=""
					title="Job Seeker Website"
					company="University of the Philippines"
				/>
				<ExperienceComponent
					image=""
					title="Interactive News Website"
					company="University of the Philippines"
				/>
				<ExperienceComponent
					image=""
					title="Sports Management Website"
					company="University of the Philippines"
				/>
				<ExperienceComponent
					image=""
					title="Internship"
					company="PHIVOLCS"
				/>
			</div>
		</div>
	);
}

export default Experience;