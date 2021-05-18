// const scripts = [
// 	"navbar.js",
// 	"sidebar.js",
// 	"icon.js"
// ];

// function loadScripts() {
// 	for (let script of scripts) {
// 		// Create scrip element
// 		let scriptElement = document.createElement("script");
// 		scriptElement.type = "text/javascript";
// 		scriptElement.src = "/js/" + script;

// 		// Append script element to head
// 		document.head.appendChild(scriptElement);
// 	}
// }

// loadScripts();

window.onload = function() {
	loadNavbar();
	loadSidebar();
	loadIcons();
};