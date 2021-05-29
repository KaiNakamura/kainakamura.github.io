import React from 'react';
import './Project.css';

export default class Project extends React.Component {
	render() {
		return (
			<div className='Project'>
				<div className='ProjectText'>
					<h2 className={this.props.language}>{this.props.language}</h2>
					<h1>{this.props.title}</h1>
					{this.props.children}
				</div>
				{this.props.img}
			</div>
		);
	}
}
