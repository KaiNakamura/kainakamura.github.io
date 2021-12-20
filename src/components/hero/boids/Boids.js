import React from 'react';
import Mouse from './Mouse';
import Boid from './Boid';
import p5 from 'p5';
import './Boids.css';

const BOID_COUNT = 100;

export default class Boids extends React.Component {
	constructor(props) {
		super(props);
		this.myRef = React.createRef();
	}

	Sketch = (sketch) => {
		let parentDiv = document.getElementById('Boids');
		let backgroundColor = getComputedStyle(document.body).getPropertyValue('--gray');
		let mouse;
		let boids = Array(BOID_COUNT);

		sketch.setup = () => {
			sketch.createCanvas(
				parentDiv.offsetWidth,
				parentDiv.offsetHeight
			);
			mouse = new Mouse(sketch);
			boids = boids.fill().map(() => new Boid(sketch));
		};

		sketch.draw = () => {
			sketch.background(backgroundColor);
			mouse.draw();
			boids.forEach(boid => boid.flock(boids, mouse));
			boids.forEach(boid => boid.update());
			boids.forEach(boid => boid.draw());
		};

		sketch.windowResized = () => {
			sketch.resizeCanvas(
				parentDiv.offsetWidth,
				parentDiv.offsetHeight
			);
			boids.forEach(boid => boid.resize());
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
