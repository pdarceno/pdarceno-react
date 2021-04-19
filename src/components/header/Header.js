import React, { useState } from "react";
// Import the BrowserRouter, Route and NavLink components
import { HashRouter } from 'react-router-dom'; 
import HeaderComponent from './HeaderComponent.js';
import { ReactComponent as CloseMenu } from "../assets/close.svg";
import { ReactComponent as MenuIcon } from "../assets/menu.svg";

function Header(props) {
	const [clicked, setClicked] = useState(false);
	
	const handleClick = () => setClicked(!clicked);
	
	const closeMobileMenu = () => setClicked(false);

	return (
		<HashRouter basename="/">
			<div className="navigation">
				<div className={clicked ? "navigation-sub navigation-active" : "navigation-sub"} onClick={closeMobileMenu}>
					<HeaderComponent
						text="Start"
						path="/" 
					/>
					<HeaderComponent
						text="Objectives"
						path="/objectives"
					/>
					<HeaderComponent
						text="Experience"
						path="/experience"
					/>
					<HeaderComponent
						text="Education & Background"
						path="/background"
					/>
					<HeaderComponent
						text="Skills & Abilities"
						path="/skills"
					/>
					<HeaderComponent
						text="Contacts"
						path="/contacts"
					/>
				</div>
				<div className="mobile" onClick={handleClick}>
					{clicked ? (
						<CloseMenu className="menu-icon" />
							) : (
						<MenuIcon className="menu-icon" />
					)}
				</div>
			</div>
		</HashRouter>
	);
}

export default Header;