export default class Mouse {
	constructor(sketch) {
		this.sketch = sketch;
		this.radius = 100;
		this.cohesionStrength = 100;
		this.separationStrength = 100;
	}

	draw() {
		this.sketch.stroke(100);
		this.sketch.strokeWeight(2);
		this.sketch.noFill();
		this.sketch.ellipse(
			this.sketch.mouseX,
			this.sketch.mouseY,
			this.radius * 2
		);

		this.sketch.noStroke();
		this.sketch.fill(100);
		this.sketch.ellipse(
			this.sketch.mouseX,
			this.sketch.mouseY,
			this.radius / 4.0
		);
	}
}