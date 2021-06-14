import p5 from 'p5';

const PERCEPTION_RADIUS = 50;
const ALIGNMENT_STRENGTH = 1.5; 
const COHESION_STRENGTH = 1.0;
const SEPARATION_STRENGTH = 1.5;
const MAX_ACCELERATION = 0.4;
const MAX_SPEED = 3;
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

	flock(boids, mouse) {
		let alignment = this.sketch.createVector();
		let cohesion = this.sketch.createVector();
		let separation = this.sketch.createVector();
		let total = 0;
		boids.forEach(other => {
			let distance = this.position.dist(other.position);
			if (other !== this && distance < PERCEPTION_RADIUS && distance > 0) {
				alignment.add(other.velocity);
				cohesion.add(other.position);
				let difference = p5.Vector.sub(
					this.position,
					other.position
				);
				difference.mult(1 / distance);
				separation.add(difference);
				total++;
			}
		});
		let mousePosition = this.sketch.createVector(
			this.sketch.mouseX,
			this.sketch.mouseY
		);
		let mouseDistance = this.position.dist(mousePosition);
		if (mouseDistance < mouse.radius && mouseDistance > 0) {
			let difference = p5.Vector.sub(
				this.position,
				mousePosition
			);
			difference.mult(mouse.separationStrength / mouseDistance);
			separation.add(difference);
		}
		if (total > 0) {
			alignment.setMag(MAX_SPEED)
			alignment.sub(this.velocity);
			alignment.limit(MAX_ACCELERATION);
			alignment.mult(ALIGNMENT_STRENGTH);

			cohesion.div(total);
			cohesion.sub(this.position);
			cohesion.setMag(MAX_SPEED)
			cohesion.sub(this.velocity);
			cohesion.limit(MAX_ACCELERATION);
			cohesion.mult(COHESION_STRENGTH);

			separation.div(total);
			separation.setMag(MAX_SPEED)
			separation.sub(this.velocity);
			separation.limit(MAX_ACCELERATION);
			separation.mult(SEPARATION_STRENGTH);
		}

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