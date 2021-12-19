import React from 'react';
import Card from 'components/cards/Card.js';
import './ProjectCard.css';

export default class ProjectCard extends Card {
	render() {
		return (
			<Card
				heading = {
					<>
						<h2 className={this.props.language}>{this.props.language}</h2>
						<h1>{this.props.title}</h1>
					</>
				}
				img = {this.props.img}
			>
				{this.props.children}
			</Card>
		);
	}
}
