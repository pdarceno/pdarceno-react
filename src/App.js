// App.jsx

import React from 'react';
// import logo from './logo.svg';
// Import the BrowserRouter, Route and Link components
import { HashRouter, Route } from 'react-router-dom'; 
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
		<HashRouter basename='/'>
			<div className="App">
				<Header />
				<div className="contents">
					<Route exact path="/" component={Home} />
					<Route exact path="/objectives" component={Objectives} />
					<Route exact path="/experience" component={Experience} />
					<Route exact path="/background" component={Background} />
					<Route exact path="/skills" component={Skills} />
					<Route exact path="/contacts" component={Contacts} />
				</div>
			</div>
		</HashRouter>
	);
}

export default App;