import React from 'react';
import Card from 'components/cards/Card';
import CardAudio from 'components/cards/CardAudio';
import final_project from 'audio/Electronic_Music_Composition_Final_Project.mp3';
import there_will_come_soft_rains from 'audio/There_Will_Come_Soft_Rains.mp3';
import 'components/cards/Cards.css';

export default class ProjectCards extends React.Component {
	render() {
		return (
			<div className='Cards'>
				<Card title='Electronic Music Composition Final Project'>
					<p>I made this piece for my final project in my Electronic Music Composition class taught by professor <a href='https://www.vjmanzo.com/' target='_blank' rel='noreferrer noopener'>V.J. Manzo</a>.</p>
					<p>I wanted to make something that would showcase what I've learned over the duration of this course. So I took several unfinished projects I made before taking this class and remixed them all together in the style of a chiptune song.</p>
					<CardAudio audio={final_project} />
				</Card>
				<Card title='There Will Come Soft Rains'>
					<p>I was inspired to make this piece by a chapter from my favorite book, <a href='https://en.wikipedia.org/wiki/The_Martian_Chronicles' target='_blank' rel='noreferrer noopener'>The Martian Chronicles</a> by Ray Bradbury.</p>
					<p>I used voice lines from an audiobook to tell the story and experimented with different instrumentation to fit the mood.</p>
					<CardAudio audio={there_will_come_soft_rains} />
				</Card>
			</div>
		);
	}
}
