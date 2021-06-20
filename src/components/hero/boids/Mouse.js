const ANIMATION_FRAMES = 12;

export default class Mouse {
	constructor(sketch) {
		this.sketch = sketch;
		this.radius = 100;
		this.animationFrame = 0;

		// Start mouse off canvas
		this.sketch.mouseX = -this.radius;
		this.sketch.mouseY = -this.radius;
	}

	draw() {
		if (this.sketch.mouseIsPressed && this.animationFrame < ANIMATION_FRAMES) {
			this.animationFrame++;
		}
		else if (!this.sketch.mouseIsPressed && this.animationFrame > 0) {
			this.animationFrame--;
		}

		this.sketch.stroke(100);
		this.sketch.strokeWeight(2);
		this.sketch.noFill();
		this.sketch.ellipse(
			this.sketch.mouseX,
			this.sketch.mouseY,
			this.radius * 2 - this.easeInOutQuad(this.animationFrame)
		);

		this.sketch.noStroke();
		this.sketch.fill(100);
		this.sketch.ellipse(
			this.sketch.mouseX,
			this.sketch.mouseY,
			this.radius / 4.0 + 2 * this.easeInOutQuad(this.animationFrame)
		);
	}

	easeInOutQuad(animationFrame) {
		let t = animationFrame / ANIMATION_FRAMES;
		return (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2) * ANIMATION_FRAMES;
	}
}