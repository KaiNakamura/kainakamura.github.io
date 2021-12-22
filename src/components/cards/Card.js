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

		const renderImg = () => {
			if (this.props.img != null && typeof this.props.img === 'string') {
				return <img src={this.props.img} alt={this.props.title} />
			}
			return this.props.img;
		};

		return (
			<div className='Card'>
				<div className='CardHeading'>
					{renderTitle()}
					{renderSubtitle()}
					{this.props.heading}
				</div>
				{renderImg()}
				<div className='CardDescription'>
					{this.props.children}
				</div>
			</div>
		);
	}
}
