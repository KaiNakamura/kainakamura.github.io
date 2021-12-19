import React from 'react';
import Card from 'components/cards/Card.js';
import './MusicCard.css';

export default class MusicCard extends Card {
	render() {
		return (
			<Card
				heading = {
					<h1>{this.props.title}</h1>
				}
				img = {this.props.img}
			>
				{this.props.children}
			</Card>
		);
	}
}
