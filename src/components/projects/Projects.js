import React from 'react';
import Project from './Project';
import ProjectButton from './ProjectButton';
import chess from 'images/chess.png';
import speedrun_showdown from 'images/speedrun-showdown.png';
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
					<p>This project is a work in progress. I plan to make an AI that can play chess using a <a href='https://en.wikipedia.org/wiki/Minimax' target='_blank' rel='noreferrer noopener'>minimax</a> algorithm.</p>
					<p>Right now I have code for basic piece movement and capturing. Check out the current status of the project on GitHub.</p>
					<ProjectButton name='View on GitHub' href='https://github.com/KaiNakamura/ChessEngine' />
				</Project>
				{/* TODO: Add images and text */}
				{/* <Project
					title='Skunk Works Robotics'
					language='java'
				>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis tincidunt venenatis. Sed non felis vel mauris volutpat rutrum. Nunc dictum scelerisque arcu, ut ornare ante sollicitudin a.</p>
					<p>Fusce libero orci, vestibulum in pellentesque nec, pretium eget turpis. Cras blandit purus et est bibendum, quis blandit augue pretium. Vestibulum molestie felis sed tortor lacinia, at sagittis orci hendrerit.</p>
					<ProjectButton name='View More' href='https://skunkworks1983.com' />
				</Project> */}
				<Project
					title='kainakamura.github.io'
					language='reactjs'
				>
					<p>You're looking at it right now! This is where I show off all the cool stuff I've been working on recently.</p>
					<p>This website went through a lot of different changes but currently it's running on <a href='https://reactjs.org' target='_blank' rel='noreferrer noopener'>ReactJs</a>. Check out the GitHub repo to view the full history of my website.</p>
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
			</div>
		);
	}
}
