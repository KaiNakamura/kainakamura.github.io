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
	let iconWrapper = document.getElementById("icon-wrapper");

	// Create a link to the icon images that will be used
	let iconLink = document.createElement("link");
	iconLink.rel = "stylesheet";
	iconLink.href = "https://cdn.jsdelivr.net/npm/fork-awesome@1.1.7/css/fork-awesome.min.css";
	iconLink.integrity = "sha256-gsmEoJAws/Kd3CjuOQzLie5Q3yshhvmo7YNtBG7aaEY=";
	iconLink.crossOrigin = "anonymous";
	iconWrapper.appendChild(iconLink);

	// Create icons
	for (let icon of icons) {
		let a = document.createElement("a");

		// Set link properties
		a.id = icon.id;
		a.href = icon.href;
		a.className += icon.image;

		// Make link open in new tab
		a.target = "_blank";
		a.rel = "noreferrer noopener";

		// Append to icon wrapper
		iconWrapper.appendChild(a);
	}
}
