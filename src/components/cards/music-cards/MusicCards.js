import React from 'react';
import MusicCard from './MusicCard';
import CardAudio from 'components/cards/CardAudio';
import final_composition from 'audio/final_composition.mp3';
import 'components/cards/Cards.css';

export default class ProjectCards extends React.Component {
	render() {
		return (
			<div className='Cards'>
				<MusicCard
					title='Electronic Music Composition Final Project'
					audio={final_composition}
				>
					<p>I made this piece for my final project in my Electronic Music Composition class taught by professor <a href='https://www.vjmanzo.com/' target='_blank' rel='noreferrer noopener'>V.J. Manzo</a>.</p>
					<p>I wanted to make something that would showcase what I've learned over the duration of this course. So I took several unfinished projects I made before taking this class and remixed them all together in the style of a chiptune song.</p>
					<CardAudio audio={final_composition} />
				</MusicCard>
			</div>
		);
	}
}
