class NavbarItem {
	constructor(id, text) {
		this.id = id;
		this.text = text;
	}
}

const navbarItems = [
	new NavbarItem("home", "Overview"),
	new NavbarItem("projects", "Projects"),
	new NavbarItem("contact", "Contact"),
];

function loadNavbar() {
	// Get navbar
	let navbar = document.getElementById("navbar");

	// Create list
	let ul = document.createElement("ul");

	for (let navbarItem of navbarItems) {
		// Create link
		let a = document.createElement("a");
		a.innerHTML = navbarItem.text;
		if (navbarItem.id === "home") {
			a.href = '/';
		}
		else {
			a.href = '/' + navbarItem.id;
		}

		// Create list item
		let li = document.createElement("li");

		// Set list item properties
		li.classList.add(navbarItem.id);

		// Append link to list item
		li.appendChild(a);

		// Append list item to list
		ul.appendChild(li);
	}

	// Append list to navbar
	navbar.appendChild(ul);
}