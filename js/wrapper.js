class WrapperItem {
	constructor(id, element) {
		this.id = id;
		this.element = element;
	}
}

const wrapperItems = [
	new WrapperItem("header", "header"),
	new WrapperItem("navbar", "nav"),
	new WrapperItem("sidebar", "aside"),
	new WrapperItem("content", "article"),
	new WrapperItem("footer", "footer")
];

// Create wrapper for body content that includes common elements across pages
function loadWrapper() {
	// Create wrapper
	let wrapper = document.createElement("div");
	wrapper.id = "wrapper";

	for (let wrapperItem of wrapperItems) {
		// Create wrapper element
		let wrapperElement = document.createElement(wrapperItem.element);
		wrapperElement.id = wrapperItem.id;

		// Move all body content into content section
		if (wrapperElement.id === "content") {
			wrapperElement.append(...document.body.childNodes);
		}

		// Append wrapper element to wrapper
		wrapper.appendChild(wrapperElement);
	}

	// Append wrapper to body
	document.body.appendChild(wrapper);
}