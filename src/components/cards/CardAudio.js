import React from 'react';
import './CardAudio.css';

export default class CardAudio extends React.Component {
	render() {
		return (
			<audio className="CardAudio" controls>
				<source src={this.props.audio} type="audio/mpeg" />
				Your browser does not support the audio element.
			</audio>
			// <div className="CardAudio">

			// </div>
		);
	}
}
