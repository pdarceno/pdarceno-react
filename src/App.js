// App.jsx

import React from 'react';
import logo from './logo.svg';
// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import Background from './pages/background/Background.js'; 
import Experience from './pages/experience/Experience.js'; 
import Objectives from './pages/objectives/Objectives.js'; 
import Skills from './pages/skills/Skills.js';  
import Contacts from './pages/contacts/Contacts.js';
import Home from './pages/home/Home.js';  
import './App.css';

function App() {
	return (
		<BrowserRouter>
			<div className="App">

				<Route path="/" component={Home} />
				<Route path="/objectives" component={Objectives} />
				<Route path="/experience" component={Experience} />
				<Route exact path="/background" component={Background} />
				<Route path="/skills" component={Skills} />
				<Route path="/contacts" component={Contacts} />

				<div className="navigation">
					<img src={logo} className="logo-image" alt="Logo Image" />
				<div className="navigation-sub">

					<Link to="/" className="item">Start</Link>
					<Link to="/objectives" className="item">Objectives</Link>
					<Link to="/objectives" className="item">Objectives</Link>
					<Link to="/experience" className="item">Experience</Link>
					<Link to="/background" className="item">Education & Background</Link>
					<Link to="/skills" className="item">Skills & Abilities</Link>
					<Link to="/contacts" className="item">Contacts</Link>

				</div>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;