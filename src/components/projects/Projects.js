import React from 'react';
import Project from './Project';
import chess from'../../images/chess.png';
import speedrun_showdown from'../../images/speedrun-showdown.png';
import './Projects.css';

export default class Projects extends React.Component {
	render() {
		return (
			<div className='Projects'>
				<Project name='Chess Engine' img={<img src={chess} alt='Kai Nakamura' />}>
					<p>Lorem ipsum <b>dolor sit amet</b>, consectetur adipiscing elit. Nam euismod dignissim magna, nec ultricies sem tempus nec.</p>
					<p>Donec at nisl ut quam <i>ultrices pretium feugiat</i> convallis lectus. Integer condimentum velit id orci scelerisque, at condimentum massa sodales.</p>
				</Project>
				<Project name='kainakamura.github.io'>
					<p>Lorem ipsum <b>dolor sit amet</b>, consectetur adipiscing elit. Nam euismod dignissim magna, nec ultricies sem tempus nec.</p>
					<p>Donec at nisl ut quam <i>ultrices pretium feugiat</i> convallis lectus. Integer condimentum velit id orci scelerisque, at condimentum massa sodales.</p>
				</Project>
				<Project name='Speedrun Showdown' img={<img src={speedrun_showdown} alt='Speedrun Showdown' />}>
					<p>Lorem ipsum <b>dolor sit amet</b>, consectetur adipiscing elit. Nam euismod dignissim magna, nec ultricies sem tempus nec.</p>
					<p>Donec at nisl ut quam <i>ultrices pretium feugiat</i> convallis lectus. Integer condimentum velit id orci scelerisque, at condimentum massa sodales.</p>
				</Project>
			</div>
		);
	}
}
