class Icon {
	constructor(id, image, href) {
		this.id = id;
		this.image = image;
		this.href = href;
	}
}

const icons = [
	new Icon("github", "fa fa-github fa-3x", "https://github.com/KaiNakamura"),
	new Icon("linkedin", "fa fa-linkedin-square fa-3x", "https://www.linkedin.com/in/kaihnakamura/"),
	new Icon("email", "fa fa-envelope fa-3x", "mailto:kaihnakamura@gmail.com"),
];

function loadIcons() {
	// Get icon wrapper
	let iconWrapper = document.getElementById("icon-wrapper");

	// Create icon link
	let iconLink = document.createElement("link");
	iconLink.rel = "stylesheet";
	iconLink.href = "https://cdn.jsdelivr.net/npm/fork-awesome@1.1.7/css/fork-awesome.min.css";
	iconLink.integrity = "sha256-gsmEoJAws/Kd3CjuOQzLie5Q3yshhvmo7YNtBG7aaEY=";
	iconLink.crossOrigin = "anonymous";

	// Append icon link to icon wrapper
	iconWrapper.appendChild(iconLink);

	for (let icon of icons) {
		// Create link
		let a = document.createElement("a");

		// Set properties
		a.id = icon.id;
		a.href = icon.href;
		a.className += icon.image;
		a.target = "_blank";
		a.rel = "noreferrer noopener";

		// Append to icon wrapper
		iconWrapper.appendChild(a);
	}
}
