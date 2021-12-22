import React from 'react';
import ProjectCard from './ProjectCard';
import CardButton from 'components/cards/CardButton';
import chess from 'images/chess.png';
import gun_gator from 'images/gun-gator.png';
import graphing_calculator from 'images/graphing-calculator.png';
import speedrun_showdown from 'images/speedrun-showdown.png';
import workday_schedule_exporter from 'images/workday-schedule-exporter.png';
import 'components/cards/Cards.css';

export default class ProjectCards extends React.Component {
	render() {
		return (
			<div className='Cards'>
				<ProjectCard
					title='Chess Engine'
					language='javascript'
					img={<img src={chess} alt='Chess' />}
				>
					<p>This project is a work in progress. I plan to make an AI that can play chess using a <a href='https://en.wikipedia.org/wiki/Minimax' target='_blank' rel='noreferrer noopener'>minimax</a> algorithm.</p>
					<p>Right now I have code for basic piece movement and capturing. Check out the current status of the project on GitHub.</p>
					<CardButton name='View on GitHub' href='https://github.com/KaiNakamura/ChessEngine' />
				</ProjectCard>
				<ProjectCard
					title='Gun Gator'
					language='gdscript'
					img={<img src={gun_gator} alt='Gun Gator' />}
				>
					<p>I made this 2D pixel platformer while I was learning how to use the <a href='https://godotengine.org/' target='_blank' rel='noreferrer noopener'>Godot game engine</a>.</p>
					<p>The game is heavily inspired by Vlambeer's outstanding <a href='http://supercratebox.com/' target='_blank' rel='noreferrer noopener'>Super Crate Box</a>, but with my own art, music, and code.</p>
					<CardButton name='Play on Itch.io' href='https://kainakamura.itch.io/gun-gator' />
					<CardButton name='View on GitHub' href='https://github.com/KaiNakamura/GunGator' />
				</ProjectCard>
				<ProjectCard
					title='Graphing Calculator'
					language='java'
					img={<img src={graphing_calculator} alt='Graphing Calculator' />}
				>
					<p>I built a <a href='https://en.wikipedia.org/wiki/Recursive_descent_parser' target='_blank' rel='noreferrer noopener'>recursive descent parser</a> graphing calculator using <a href='https://en.wikipedia.org/wiki/Context-free_grammar' target='_blank' rel='noreferrer noopener'>context-free grammar (CFG)</a>.</p>
					<p>Strings are converted into an expression tree that represents the steps used to evaluate the expression with respect to order of operations.</p>
					<CardButton name='View on GitHub' href='https://github.com/KaiNakamura/GraphingCalculator' />
				</ProjectCard>
				<ProjectCard
					title='kainakamura.github.io'
					language='reactjs'
				>
					<p>You're looking at it right now! This is where I show off all the cool stuff I've been working on recently.</p>
					<p>This website went through a lot of different changes but currently it's running on <a href='https://reactjs.org' target='_blank' rel='noreferrer noopener'>ReactJs</a>. Check out the GitHub repo to view the full history of my website.</p>
					<CardButton name='View on GitHub' href='https://github.com/KaiNakamura/kainakamura.github.io' />
				</ProjectCard>
				<ProjectCard
					title='Speedrun Showdown'
					language='java'
					img={<img src={speedrun_showdown} alt='Speedrun Showdown' />}
				>
					<p>This project is a Minecraft speedrunning and PvP plugin. Teams of players race to be the first to beat the game.</p>
					<p>It was used in the <a href='https://smash.gg/mcss' target='_blank' rel='noreferrer noopener'>Minecraft Speedrun Showdown</a> tournament in which 32 streamers competed for a $1000 prize.</p>
					<CardButton name='View on GitHub' href='https://github.com/KaiNakamura/SpeedrunShowdown' />
				</ProjectCard>
				<ProjectCard
					title='Workday Schedule Exporter'
					language='reactjs'
					img={<img src={workday_schedule_exporter} alt='Workday Schedule Exporter' />}
				>
					<p>This was the first project I ever made while at WPI. I made it with my roommate, <a href='https://github.com/Akalay27' target='_blank' rel='noreferrer noopener'>Adam</a>, so that students would have an easy way to export their Workday schedules to a calendar app of their choice.</p>
					<CardButton name='View Website' href='https://akalay27.github.io/workday-schedule-exporter/' />
					<CardButton name='View on GitHub' href='https://github.com/Akalay27/workday-schedule-exporter' />
				</ProjectCard>
			</div>
		);
	}
}
