import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectButton.css';

export default class ProjectButton extends React.Component {
	render() {
		return (
			<div className='ProjectButton'>
				{
					// If link is on this site, route to page
					// If link is external, open in new tab
					this.props.href !== undefined && 
					this.props.href.charAt(0) === '/'
						?
							<Link to={this.props.href}>
								<span>{this.props.name}</span>
							</Link>
						:
							<a href={this.props.href} target='_blank' rel='noreferrer noopener'>
								<span>{this.props.name}</span>
							</a>
				}
			</div>
		);
	}
}
