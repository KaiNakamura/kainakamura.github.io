import React from 'react';
import FooterItem from './FooterItem';
import './Footer.css';

export default class Footer extends React.Component {
	render() {
		return (
			<nav className="Footer">
				<ul>
					<FooterItem name="Source Code" href="https://github.com/KaiNakamura/kainakamura.github.io" />
					<FooterItem name="Report Bug" href="https://github.com/KaiNakamura/kainakamura.github.io/issues" />
				</ul>
			</nav>
		);
	}
}
