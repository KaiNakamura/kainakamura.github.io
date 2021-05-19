const scripts = [
	"wrapper.js",
	"header.js",
	"navbar.js",
	"sidebar.js",
	"icon.js",
	"footer.js"
];

// Load all javascript files that will be used
// Eliminates repetetive script tags across pages
function loadScripts() {
	for (let script of scripts) {
		// Create scrip element
		let scriptElement = document.createElement("script");
		scriptElement.type = "text/javascript";
		scriptElement.src = "/js/" + script;

		// Append script element to head
		document.head.appendChild(scriptElement);
	}
}

// Make HTML visible
// Leaving it visible before it loads creates a weird loading frame
function showPage() {
	document.documentElement.style.visibility = "visible";
}

loadScripts();

// When page loads, create html elements
window.onload = function() {
	loadWrapper();
	loadHeader();
	loadNavbar();
	loadSidebar();
	loadIcons();
	loadFooter();
	showPage();
};