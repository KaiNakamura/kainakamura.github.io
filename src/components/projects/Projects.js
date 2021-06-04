import React from 'react';
import Project from './Project';
import ProjectButton from './ProjectButton';
import chess from'../../images/chess.png';
import speedrun_showdown from'../../images/speedrun-showdown.png';
import './Projects.css';

export default class Projects extends React.Component {
	render() {
		return (
			<div className='Projects'>
				<Project
					title='Chess Engine'
					language='javascript'
					img={<img src={chess} alt='Kai Nakamura' />}
				>
					<p>Lorem ipsum <b>dolor sit amet</b>, consectetur adipiscing elit. Nam euismod dignissim magna, nec ultricies sem tempus nec.</p>
					<p>Donec at nisl ut quam <i>ultrices pretium feugiat</i> convallis lectus. Integer condimentum velit id orci scelerisque, at condimentum massa sodales.</p>
					<ProjectButton name='View on GitHub' href='https://github.com/KaiNakamura/ChessEngine' />
				</Project>
				<Project
					title='kainakamura.github.io'
					language='reactjs'
				>
					<p>You're looking at it right now! This is where I show off all the cool stuff I've been working on recently.</p>
					<p>This website went through a lot of different changes but currently it's running on ReactJS. Check out the GitHub repo to view the full history of my website.</p>
					<ProjectButton name='View on GitHub' href='https://github.com/KaiNakamura/kainakamura.github.io' />
				</Project>
				<Project
					title='Speedrun Showdown'
					language='java'
					img={<img src={speedrun_showdown} alt='Speedrun Showdown' />}
				>
					<p>This project is a Minecraft speedrunning and PvP plugin. Teams of players race to be the first to beat the game.</p>
					<p>It was used in the <a href='https://smash.gg/mcss' target='_blank' rel='noreferrer noopener'>Minecraft Speedrun Showdown</a> tournament in which 32 streamers competed for a $1000 prize.</p>
					<ProjectButton name='View on GitHub' href='https://github.com/KaiNakamura/SpeedrunShowdown' />
				</Project>
				{/* TODO: Add robotics */}
			</div>
		);
	}
}
