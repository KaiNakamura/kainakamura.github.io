class Icon {
	constructor(id, name, image, link) {
		this.id = id;
		this.name = name;
		this.image = image;
		this.link = link;
	}
}

const icons = [
	new Icon("github", "GitHub", "fa fa-github fa-3x", "https://github.com/KaiNakamura"),
	new Icon("linkedin", "LinkedIn", "fa fa-linkedin-square fa-3x", "https://www.linkedin.com/in/kaihnakamura/"),
	new Icon("email", "Email", "fa fa-envelope fa-3x", "mailto:kaihnakamura@gmail.com"),
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
		a.href = icon.link;
		a.className += icon.image;
		a.target = "_blank";
		a.rel = "noreferrer noopener";

		// Append to icon wrapper
		iconWrapper.appendChild(a);
	}
}
