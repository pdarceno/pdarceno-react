import React from "react";
import SkillsComponent from './SkillsComponent.js';

function Skills(props) {
	return (
		<div>
			<h1>SKILLS AND ABILITIES</h1>
			<SkillsComponent
				image="/images/skills/frontend.jpg"
				skill="Frontend Development"
				description="I first learned frontend and web design by doing static web pages in my college years. I learned a lot since then and I've been applying most of them until now."
			/>
			<SkillsComponent
				image="/images/skills/backend.jpeg"
				skill="Backend Development"
				description="I learned backend along with database management in college as well. I studied it for quite a while and now have a pretty good grasp on a few best practices and optimizations when retrieving data from a backend server."
			/>
			<SkillsComponent
				image="/images/skills/fullstack.jpg"
				skill="Fullstack Development"
				description="After learning front and back, I went on and tried full stack. It was admittedly hard, but the past learnings proved useful and I was able to be part of a team that creates not only responsive but fast apps."
			/>
			<SkillsComponent
				image="/images/skills/javascript.png"
				skill="Javascript"
				description="I was able to use vanilla Javascript in college for making responsive web applications. I still use it until now along with a few libraries built around it."
			/>
			<SkillsComponent
				image="/images/skills/php.png"
				skill="PHP"
				description="I had my try on PHP in college. This was when we were making apps with actual data and a database. I didn't know any PHP frameworks yet but back then I thought plain PHP was still more than enough."
			/>
			<SkillsComponent
				image="/images/skills/react.png"
				skill="React"
				description="I had my first look at React during my internship at PHIVOLCS. I happen to like it but I felt I wasn't able to study it for long because of the short internship time. Fortunately, the first work I had encouraged React for frontend development."
			/>
			<SkillsComponent
				image="/images/skills/laravel.jfif"
				skill="Laravel"
				description="Alongside React, I had the opportunity to learn Laravel for the backend processes. I thought it was handy because of its many features but most importantly because of its security and ease of error handling with its error logging ability."
			/>
			<SkillsComponent
				image="/images/skills/webhook.png"
				skill="Webhook"
				description="I was also able to use Webhooks for the applications we, in the team, are making. I found it so useful and efficient because we can make the app communicate with itself. It proved useful with so many of the features our clients have been asking for to implement."
			/>
		</div>
	)
}

export default Skills;