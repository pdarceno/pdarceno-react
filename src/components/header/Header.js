import React from "react";

// Import the BrowserRouter, Route and Link components
import { HashRouter, Link } from 'react-router-dom'; 

function Header(props) {
	return (
		<HashRouter basename="/">
			<div className="navigation">
				<div className="navigation-sub">
					<Link to="/" className="item">Start</Link>
					<Link to="/objectives" className="item">Objectives</Link>
					<Link to="/experience" className="item">Experience</Link>
					<Link to="/background" className="item">Education & Background</Link>
					<Link to="/skills" className="item">Skills & Abilities</Link>
					<Link to="/contacts" className="item">Contacts</Link>
				</div>
			</div>
		</HashRouter>
	);
}

export default Header;