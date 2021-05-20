import React from 'react';
import NavbarItem from './NavbarItem';
import './Navbar.css';

export default class Navbar extends React.Component {
	handleClick(navbarItem) {
		this.setState({ active: navbarItem });
	}

	render() {
		return (
			<nav className="Navbar">
				<ul>
					<NavbarItem name="Overview" href="/" />
					<NavbarItem name="Projects" href="/projects" />
					<NavbarItem name="Contact" href="/contact" />
				</ul>
			</nav>
		);
	}
}
