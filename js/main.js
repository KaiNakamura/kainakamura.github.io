class Star {
	constructor(x, y, z) {
		this.x = x;
		this.y = y;
		this.z = z;
	}

	draw(context) {
		let d = this.z / 1000.0;
		let b = (1 - d * d) * 255;
		context.fillStyle = "rgb(" + b + ", " + b + ", " + b + ")";
		context.fillRect(
			canvas.width / 2 + this.x / (this.z * 0.001),
			canvas.height / 2 + this.y / (this.z * 0.001),
			2,
			2
		);
	}
}

function loadBackground() {
	let canvas = document.getElementById("canvas");
	let context = canvas.getContext("2d");

	let updateSize = () => {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
	};

	updateSize();

	stars = []

	for (let i = 0; i < 1000; i++) {
		stars.push(new Star(
			Math.random() * canvas.width - canvas.width / 2,
			Math.random() * canvas.height - canvas.height / 2,
			Math.random() * 1000
		));
	}

	setInterval(() => {
		updateSize();

		for (let star of stars) {
			star.draw(context);

			star.z -= 1;
			if (star.z < 0) {
				star.z += 1000;
			}
		}
	}, 1);
}

function loadAge() {
	let ageElement = document.getElementById("age");
	setInterval(() => {
		let time = (new Date() - new Date("February 24, 2003 00:00:00")) / (1000 * 60 * 60 * 24 * 365.25); // milliseconds per year
		ageElement.innerText = time.toString().substring(0, 12);
	}, 50);
}

window.onload = function() {
	loadBackground();
	loadAge();
}