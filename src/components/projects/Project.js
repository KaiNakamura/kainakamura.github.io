import React from 'react';
import './Project.css';

export default class Project extends React.Component {
	render() {
		return (
			<div className='Project'>
				<div className='ProjectText'>
					<h1>{this.props.name}</h1>
					{this.props.children}
				</div>
				{this.props.img}
			</div>
		);
	}
}
