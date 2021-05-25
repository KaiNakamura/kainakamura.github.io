import React from 'react';

export default class FooterItem extends React.Component {
	render() {
		return (
			<li>
				<a href={this.props.href} target="_blank" rel="noreferrer noopener">
					{this.props.name}
				</a>
			</li>
		);
	}
}