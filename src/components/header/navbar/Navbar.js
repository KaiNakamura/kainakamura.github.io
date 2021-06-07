import React from 'react';
import NavbarItem from './NavbarItem';
import './Navbar.css';

export default class Navbar extends React.Component {
	handleClick(navbarItem) {
		this.setState({ active: navbarItem });
	}

	render() {
		return (
			<nav className='Navbar'>
				<ul>
					<NavbarItem name='Kai Nakamura' href='/' />
					<NavbarItem name='Projects' href='projects' />
					<NavbarItem name='Skills' href='skills' />
					<NavbarItem name='Contact' href='contact' />
				</ul>
			</nav>
		);
	}
}
