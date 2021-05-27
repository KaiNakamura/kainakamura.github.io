import React from 'react';
import Navbar from './navbar/Navbar';
import './Header.css';

export default class Header extends React.Component {
	render() {
		return (
			<header className='Header'>
				<Navbar />
			</header>
		);
	}
}
