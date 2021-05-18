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
	// Get footer
	let footer = document.getElementById("footer");

	// Create list
	let ul = document.createElement("ul");

	for (let footerItem of footerItems) {
		// Create link
		let a = document.createElement("a");

		// Set link properties
		a.innerHTML = footerItem.text;
		a.href = footerItem.link;
		a.target = "_blank";
		a.rel = "noreferrer noopener";

		// Create list item
		let li = document.createElement("li");

		// Append link to list item
		li.appendChild(a);

		// Append list item to list
		ul.appendChild(li);
	}

	// Append list to footer
	footer.appendChild(ul);
}