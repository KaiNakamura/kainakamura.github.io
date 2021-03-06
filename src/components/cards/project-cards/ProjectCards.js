import React from 'react';
import ProjectCard from './ProjectCard';
import Cards from 'components/cards/Cards';
import CardLink from 'components/cards/CardLink';
import CardButton from 'components/cards/CardButton';
import gun_gator from 'images/gun-gator.png';
import graphing_calculator from 'images/graphing-calculator.png';
import speedrun_showdown from 'images/speedrun-showdown.png';
import workday_schedule_exporter from 'images/workday-schedule-exporter.png';
import 'components/cards/Cards.css';

export default class ProjectCards extends React.Component {
	render() {
		return (
			<Cards slideshow={this.props.slideshow}>
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
					title='Speedrun Showdown'
					language='java'
					img={speedrun_showdown}
				>
					<p>This project is a Minecraft speedrunning and PvP plugin. Teams of players race to be the first to beat the game.</p>
					<p>It was used in the <CardLink href='https://smash.gg/mcss'>Minecraft Speedrun Showdown</CardLink> tournament in which 32 streamers competed for a $1000 prize.</p>
					<CardButton href='https://smash.gg/mcss'>More Details</CardButton>
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
				<ProjectCard
					title='Graphing Calculator'
					language='java'
					img={graphing_calculator}
				>
					<p>I built a <CardLink href='https://en.wikipedia.org/wiki/Recursive_descent_parser'>recursive descent parser</CardLink> graphing calculator using <CardLink href='https://en.wikipedia.org/wiki/Context-free_grammar'>context-free grammar (CFG)</CardLink>.</p>
					<p>Strings are converted into an expression tree that represents the steps used to evaluate the expression with respect to order of operations.</p>
					<CardButton href='https://github.com/KaiNakamura/GraphingCalculator'>View on GitHub</CardButton>
				</ProjectCard>
			</Cards>
		);
	}
}
