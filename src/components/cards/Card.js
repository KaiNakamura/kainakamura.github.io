import React from 'react';
import './Card.css';

export default class Card extends React.Component {
	render() {
		return (
			<div className='Card'>
				<div className='CardHeading'>
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
