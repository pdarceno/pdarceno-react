import React from 'react'; // Import the Component component from React
import { NavLink } from 'react-router-dom'; 

function HeaderComponent(props) {
	return (
		<NavLink 
			exact 
			to={props.path} 
			className="item" 
			activeClassName="navigation-active" 
			replace
		>
			{props.text}
		</NavLink>
	);
}

export default HeaderComponent;