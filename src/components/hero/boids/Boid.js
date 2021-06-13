import p5 from 'p5';

const ALIGNMENT_RADIUS = 50;
const COHESION_RADIUS = 10;
const SEPARATION_RADIUS = 50;
const ALIGNMENT_STRENGTH = 1.5; 
const COHESION_STRENGTH = 1.0;
const SEPARATION_STRENGTH = 1.5;
const MAX_ACCELERATION = 0.05;
const MAX_SPEED = 2;
const BOID_SIZE = 1; // % of screen width

export default class Boid {
	constructor(sketch) {
		this.sketch = sketch;
		this.position = sketch.createVector(
			sketch.random(sketch.width),
			sketch.random(sketch.height)
		);
		this.velocity = p5.Vector.random2D();
		this.velocity.setMag(sketch.random(2, 4));
		this.acceleration = sketch.createVector();
		this.resize();
	}

	resize() {
		this.size = (BOID_SIZE / 100.0) * this.sketch.width;
	}

	edges() {
		if (this.position.x > this.sketch.width + this.size) {
			this.position.x = -this.size;
		}
		else if (this.position.x < -this.size) {
			this.position.x = this.sketch.width + this.size
		}

		if (this.position.y > this.sketch.height + this.size) {
			this.position.y = -this.size;
		}
		else if (this.position.y < -this.size) {
			this.position.y = this.sketch.height + this.size;
		}
	}

	align(boids) {
		let total = 0;
		let steering = this.sketch.createVector();
		boids.forEach(other => {
			let distance = this.position.dist(other.position);
			if (other !== this && distance < ALIGNMENT_RADIUS
			) {
				steering.add(other.velocity);
				total++;
			}
		});
		if (total > 0) {
			steering.setMag(MAX_SPEED)
			steering.sub(this.velocity);
			steering.limit(MAX_ACCELERATION);
		}
		return steering;
	}

	cohere(boids) {
		let total = 0;
		let steering = this.sketch.createVector();
		boids.forEach(other => {
			let distance = this.position.dist(other.position);
			if (other !== this && distance < COHESION_RADIUS
			) {
				steering.add(other.position);
				total++;
			}
		});
		if (total > 0) {
			steering.div(total);
			steering.sub(this.position);
			steering.setMag(MAX_SPEED)
			steering.sub(this.velocity);
			steering.limit(MAX_ACCELERATION);
		}
		return steering;
	}

	separate(boids) {
		let total = 0;
		let steering = this.sketch.createVector();
		boids.forEach(other => {
			let distance = this.position.dist(other.position);
			if (other !== this && distance < SEPARATION_RADIUS) {
				let difference = p5.Vector.sub(this.position, other.position);
				if (distance > 0) {
					difference.mult(1 / distance);
				}
				steering.add(difference);
				total++;
			}
		});
		if (total > 0) {
			steering.div(total);
			steering.setMag(MAX_SPEED)
			steering.sub(this.velocity);
			steering.limit(MAX_ACCELERATION);
		}
		return steering;
	}

	flock(boids) {
		let alignment = this.align(boids);
		let cohesion = this.cohere(boids);
		let separation = this.separate(boids);

		alignment.mult(ALIGNMENT_STRENGTH);
		cohesion.mult(COHESION_STRENGTH);
		separation.mult(SEPARATION_STRENGTH);

		this.acceleration.add(alignment);
		this.acceleration.add(cohesion);
		this.acceleration.add(separation);

	}

	update() {
		this.position.add(this.velocity);
		this.acceleration.limit(MAX_ACCELERATION);
		this.velocity.add(this.acceleration);
		this.velocity.limit(MAX_SPEED);
		this.acceleration.set(0, 0);
		this.resize();
		this.edges();
	}

	draw() {
		let direction = p5.Vector.normalize(this.velocity);
		this.sketch.push();
		this.sketch.stroke(100);
		this.sketch.strokeWeight(2);
		this.sketch.noFill();
		this.sketch.translate(this.position.x, this.position.y);
		this.sketch.rotate(direction.heading());
		this.sketch.translate(direction.mag(), 0);
		this.sketch.triangle(
			0, this.size / 3,
			0, -this.size / 3,
			this.size, 0
		);
		this.sketch.pop();
	}
}