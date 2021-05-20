import React from 'react';
import { NavLink } from 'react-router-dom';

export default class NavbarItem extends React.Component {
	render() {
		return (
			<li>
				<NavLink exact={this.props.href == "/" ? true : false} to={this.props.href} activeClassName="active">
					{this.props.name}
				</NavLink>
			</li>
		);
	}
}
