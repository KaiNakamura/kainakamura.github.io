import React from 'react';
import CardLink from './CardLink';
import './CardButton.css';

export default class CardButton extends CardLink {
	render() {
		return (
			<div className='CardButton' onClick={this.props.onClick}>
				<CardLink href={this.props.href}>{this.props.children}</CardLink>
			</div>
		);
	}
}
