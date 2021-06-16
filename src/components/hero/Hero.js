import React from 'react';
import Boids from './boids/Boids';
import pfp from 'images/kai-nakamura.png';
import './Hero.css';

export default class Hero extends React.Component {
	render() {
		return (
			<section className='Hero'>
				<Boids />
				<div className='HeroContent'>
					<div className='Title'>
						<h1>Hi, I'm Kai</h1>
						<h2>Software Dev / Student</h2>
					</div>
					<img className='ProfilePicture' src={pfp} alt='Kai Nakamura' />
				</div>
				<div className='Arrow'>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</section>
		);
	}
}
