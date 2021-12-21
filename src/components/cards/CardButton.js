import React from 'react';
import { Link } from 'react-router-dom';
import './CardButton.css';

export default class CardButton extends React.Component {
	render() {
		const renderLink = () => {
			// If link exists and is on this site, route to page
			if (this.props.href != null && this.props.href.charAt(0) === '/') {
				return (
					<Link to={this.props.href}>
						<span>{this.props.name}</span>
					</Link>
				);
			}
			// Else link is external, open in new tab
			return (
				<a href={this.props.href} target='_blank' rel='noreferrer noopener'>
					<span>{this.props.name}</span>
				</a>
			);
		};

		return (
			<div className='CardButton' onClick={this.props.onClick}>
				{renderLink()}
			</div>
		);
	}
}
