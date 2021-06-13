import React from 'react';
import Boid from './Boid';
import p5 from 'p5';
import './Boids.css';

export default class Boids extends React.Component {
	constructor(props) {
		super(props);
		this.myRef = React.createRef();
	}

	Sketch = (sketch) => {
		let parentDiv = document.getElementById('Boids');
		let backgroundColor = getComputedStyle(document.body).getPropertyValue('--gray');
		let boids = Array(200);

		sketch.setup = () => {
			sketch.createCanvas(
				parentDiv.offsetWidth,
				parentDiv.offsetHeight
			);
			boids = boids.fill().map(() => new Boid(sketch));
		};

		sketch.draw = () => {
			sketch.background(backgroundColor);
			boids.forEach(boid => boid.flock(boids));
			boids.forEach(boid => boid.update());
			boids.forEach(boid => boid.draw());
		};

		sketch.windowResized = () => {
			sketch.resizeCanvas(
				parentDiv.offsetWidth,
				parentDiv.offsetHeight
			);
		};
	};

	componentDidMount() {
		this.p5 = new p5(this.Sketch, this.myRef.current);
	}

	render() {
		return (
			<div id='Boids' ref={this.myRef}></div>
		);
	}
}
