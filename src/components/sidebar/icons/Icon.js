import React from 'react';

export default class Icon extends React.Component {
	render() {
		return (
			<a className={this.props.className} href={this.props.href} target='_blank' rel='noreferrer noopener'>
				<span>{this.props.name}</span>
			</a>
		);
	}
}
