import React from 'react';
import Icon from './Icon';
import './Icons.css';

export default class Icons extends React.Component {
	render() {
		return (
			<div className='Icons'>
				<Icon name='GitHub' className='fa fa-github fa-3x' href='https://github.com/KaiNakamura' />
				<Icon name='LinkedIn' className='fa fa-linkedin-square fa-3x' href='https://www.linkedin.com/in/kaihnakamura/' />
				<Icon name='Email' className='fa fa-envelope fa-3x' href='mailto:kaihnakamura@gmail.com' />
			</div>
		);
	}
}
