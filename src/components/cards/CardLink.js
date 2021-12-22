import React from 'react';
import { Link } from 'react-router-dom';

export default class CardLink extends React.Component {
	render() {
		const renderLink = () => {
			// If link exists and is on this site, route to page
			if (this.props.href != null && this.props.href.charAt(0) === '/') {
				return (
					<Link to={this.props.href}>
						{this.props.children}
					</Link>
				);
			}
			// Else link is external, open in new tab
			return (
				<a href={this.props.href} target='_blank' rel='noreferrer noopener'>
					{this.props.children}
				</a>
			);
		};

		return (
			renderLink()
		);
	}
}
