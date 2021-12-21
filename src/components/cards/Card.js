import React from 'react';
import './Card.css';

export default class Card extends React.Component {
	render() {
		const renderTitle = () => {
			if (this.props.title != null) {
				return <h1>{this.props.title}</h1>;
			}
			return null;
		};

		const renderSubtitle = () => {
			if (this.props.title != null) {
				return <h2>{this.props.subtitle}</h2>;
			}
			return null;
		};

		return (
			<div className='Card'>
				<div className='CardHeading'>
					{renderTitle()}
					{renderSubtitle()}
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
