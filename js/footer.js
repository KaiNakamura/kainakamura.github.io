class FooterItem {
	constructor(text, link) {
		this.text = text;
		this.link = link;
	}
}

const footerItems = [
	new FooterItem("Source Code", "https://github.com/KaiNakamura/kainakamura.github.io"),
	new FooterItem("Report Bug", "https://github.com/KaiNakamura/kainakamura.github.io/issues"),
];

function loadFooter() {
	let footer = document.getElementById("footer");
	let ul = document.createElement("ul");

	// Create footer items
	for (let footerItem of footerItems) {
		let a = document.createElement("a");

		// Set link properties
		a.innerHTML = footerItem.text;
		a.href = footerItem.link;

		// Make link open in new tab
		a.target = "_blank";
		a.rel = "noreferrer noopener";

		// Add links to list element and add them to the list
		let li = document.createElement("li");
		li.appendChild(a);
		ul.appendChild(li);
	}

	// Add list to footer
	footer.appendChild(ul);
}