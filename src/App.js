// App.jsx

import React from 'react';
import logo from './logo.svg';
// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route } from 'react-router-dom'; 
import Header from './components/header/Header'; 
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
				<Header />

				<Route path="/pdarceno-react" component={Home} />
				<Route path="/pdarceno-react/objectives" component={Objectives} />
				<Route path="/pdarceno-react/experience" component={Experience} />
				<Route exact path="/pdarceno-react/background" component={Background} />
				<Route path="/pdarceno-react/skills" component={Skills} />
				<Route path="/pdarceno-react/contacts" component={Contacts} />
			</div>
		</BrowserRouter>
	);
}

export default App;