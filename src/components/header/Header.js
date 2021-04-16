import React from "react";

// Import the BrowserRouter, Route and Link components
import { Link } from 'react-router-dom'; 

function Header(props) {
	return (
		<div className="navigation">
			<div className="navigation-sub">
				<Link to="/pdarceno-react" className="item">Start</Link>
				<Link to="/pdarceno-react/objectives" className="item">Objectives</Link>
				<Link to="/pdarceno-react/experience" className="item">Experience</Link>
				<Link to="/pdarceno-react/background" className="item">Education & Background</Link>
				<Link to="/pdarceno-react/skills" className="item">Skills & Abilities</Link>
				<Link to="/pdarceno-react/contacts" className="item">Contacts</Link>
			</div>
		</div>
	);
}

export default Header;