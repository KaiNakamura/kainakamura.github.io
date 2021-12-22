import React from 'react';
import ProjectCard from './ProjectCard';
import CardLink from 'components/cards/CardLink';
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
					img={chess}
				>
					<p>This project is a work in progress. I plan to make an AI that can play chess using a <CardLink href='https://en.wikipedia.org/wiki/Minimax'>minimax</CardLink> algorithm.</p>
					<p>Right now I have code for basic piece movement and capturing. Check out the current status of the project on GitHub.</p>
					<CardButton href='https://github.com/KaiNakamura/ChessEngine'>View on GitHub</CardButton>
				</ProjectCard>
				<ProjectCard
					title='Gun Gator'
					language='gdscript'
					img={gun_gator}
				>
					<p>I made this 2D pixel platformer while I was learning how to use the <CardLink href='https://godotengine.org/'>Godot game engine</CardLink>.</p>
					<p>The game is heavily inspired by Vlambeer's outstanding <CardLink href='http://supercratebox.com/'>Super Crate Box</CardLink>, but with my own art, music, and code.</p>
					<CardButton href='https://kainakamura.itch.io/gun-gator'>Play on Itch.io</CardButton>
					<CardButton href='https://github.com/KaiNakamura/GunGator'>View on Github</CardButton>
				</ProjectCard>
				<ProjectCard
					title='Graphing Calculator'
					language='java'
					img={graphing_calculator}
				>
					<p>I built a <CardLink href='https://en.wikipedia.org/wiki/Recursive_descent_parser'>recursive descent parser</CardLink> graphing calculator using <CardLink href='https://en.wikipedia.org/wiki/Context-free_grammar'>context-free grammar (CFG)</CardLink>.</p>
					<p>Strings are converted into an expression tree that represents the steps used to evaluate the expression with respect to order of operations.</p>
					<CardButton href='https://github.com/KaiNakamura/GraphingCalculator'>View on GitHub</CardButton>
				</ProjectCard>
				<ProjectCard
					title='kainakamura.github.io'
					language='reactjs'
				>
					<p>You're looking at it right now! This is where I show off all the cool stuff I've been working on recently.</p>
					<p>This website went through a lot of different changes but currently it's running on <CardLink href='https://reactjs.org'>ReactJs</CardLink>. Check out the GitHub repo to view the full history of my website.</p>
					<CardButton href='https://github.com/KaiNakamura/kainakamura.github.io'>View on GitHub</CardButton>
				</ProjectCard>
				<ProjectCard
					title='Speedrun Showdown'
					language='java'
					img={speedrun_showdown}
				>
					<p>This project is a Minecraft speedrunning and PvP plugin. Teams of players race to be the first to beat the game.</p>
					<p>It was used in the <CardLink href='https://smash.gg/mcss'>Minecraft Speedrun Showdown</CardLink> tournament in which 32 streamers competed for a $1000 prize.</p>
					<CardButton href='https://github.com/KaiNakamura/SpeedrunShowdown'>View on GitHub</CardButton>
				</ProjectCard>
				<ProjectCard
					title='Workday Schedule Exporter'
					language='reactjs'
					img={workday_schedule_exporter}
				>
					<p>This was the first project I ever made while at WPI. I made it with my roommate, <CardLink href='https://github.com/Akalay27'>Adam</CardLink>, so that students would have an easy way to export their Workday schedules to a calendar app of their choice.</p>
					<CardButton href='https://akalay27.github.io/workday-schedule-exporter/'>View Website</CardButton>
					<CardButton href='https://github.com/Akalay27/workday-schedule-exporter'>View on GitHub</CardButton>
				</ProjectCard>
			</div>
		);
	}
}
