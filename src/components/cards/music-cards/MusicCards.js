import React from 'react';
import Card from 'components/cards/Card';
import CardLink from 'components/cards/CardLink';
import CardAudio from 'components/cards/CardAudio';
import gravity_cycles from 'audio/Gravity_Cycles.mp3';
import there_will_come_soft_rains from 'audio/There_Will_Come_Soft_Rains.mp3';
import deep_blue_255 from 'audio/Deep_Blue_255.mp3';
import saccharine_squares from 'audio/Saccharine_Squares.mp3';
import reverse_entropy from 'audio/Reverse_Entropy.mp3';
import 'components/cards/Cards.css';

export default class ProjectCards extends React.Component {
	render() {
		return (
			<div className='Cards'>
				<Card title='Gravity Cycles'>
					<p>I made this piece for my final project in my Electronic Music Composition class taught by professor <CardLink href='https://www.vjmanzo.com/'>V.J. Manzo</CardLink>.</p>
					<p>I wanted to make something that would showcase what I've learned over the duration of this course. So I took several unfinished projects I made before taking this class and remixed them all together in the style of a chiptune song.</p>
					<CardAudio audio={gravity_cycles} />
				</Card>
				<Card title='There Will Come Soft Rains'>
					<p>I was inspired to make this piece by a chapter from my favorite book, <CardLink href='https://en.wikipedia.org/wiki/The_Martian_Chronicles'>The Martian Chronicles</CardLink> by Ray Bradbury.</p>
					<p>I used voice lines from an audiobook to tell the story and experimented with different instrumentation to fit the mood.</p>
					<CardAudio audio={there_will_come_soft_rains} />
				</Card>
				<Card title='Deep Blue 255'>
					<p>An ambient piece I made by using a very spacy pad with lots of reverb. I also added some frequency sweeps so the sound of the pad is always changing.</p>
					<p>All the while a random number generator plays notes on a quiet bell.</p>
					<CardAudio audio={deep_blue_255} />
				</Card>
				<Card title='Saccharine Squares'>
					<p>A fun 8-bit chiptune melody I wrote to be used for a 2D platformer.</p>
					<CardAudio audio={saccharine_squares} />
				</Card>
				<Card title='Reverse Entropy'>
					<p>My stab at creating an EDM beat with some different synths I made.</p>
					<CardAudio audio={reverse_entropy} />
				</Card>
			</div>
		);
	}
}
