import React from 'react';
import './Card.css';

export default class Card extends React.Component {
	render() {
		return (
			<div className='Card'>
				<div className='CardHeading'>
					<h1>{this.props.title}</h1>
					<h2>{this.props.subtitle}</h2>
					{this.props.heading}
				</div>
				{this.props.img}
				<div className='CardDescription'>
					{this.props.children}
				</div>
			</div>
		);
	}
}
