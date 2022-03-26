import React from 'react';
import Card from 'components/cards/Card';
import Cards from 'components/cards/Cards';
import CardLink from 'components/cards/CardLink';
import CardAudio from 'components/cards/CardAudio';
import gravity_cycles from 'audio/Gravity_Cycles.mp3';
import timbercreek from 'audio/Timbercreek.mp3';
import reverse_entropy from 'audio/Reverse_Entropy.mp3';
import deep_blue_255 from 'audio/Deep_Blue_255.mp3';
import there_will_come_soft_rains from 'audio/There_Will_Come_Soft_Rains.mp3';
import 'components/cards/Cards.css';

export default class ProjectCards extends React.Component {
	render() {
		return (
			<Cards slideshow={this.props.slideshow}>
				<Card title='Gravity Cycles'>
					<p>My stab at creating an EDM beat with some different synths I made.</p>
					<CardAudio audio={gravity_cycles} />
				</Card>
				<Card title='Timbercreek'>
					<p>My final composition for Topics in MIDI taught by Professor <CardLink href='https://www.davidibbett.com/'>David Ibbett</CardLink>.</p>
					<CardAudio audio={timbercreek} />
				</Card>
				<Card title='Reverse Entropy'>
					<p>I made this 8-bit chiptune piece for my final project in my Electronic Music Composition class taught by Professor <CardLink href='https://www.vjmanzo.com/'>V.J. Manzo</CardLink>.</p>
					<CardAudio audio={reverse_entropy} />
				</Card>
				<Card title='Deep Blue 255'>
					<p>An ambient piece I made by using a spacy pad with lots of reverb. In the background, a random number generator plays a quiet kalimba. </p>
					<CardAudio audio={deep_blue_255} />
				</Card>
				<Card title='There Will Come Soft Rains'>
					<p>An experimental piece inspired from a chapter of <CardLink href='https://en.wikipedia.org/wiki/The_Martian_Chronicles'>The Martian Chronicles</CardLink> by Ray Bradbury.</p>
					<CardAudio audio={there_will_come_soft_rains} />
				</Card>
			</Cards>
		);
	}
}
