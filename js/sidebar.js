function loadSidebar() {
	// Get sidebar
	let sidebar = document.getElementById("sidebar");

	// Create profile picture
	let profilePicture = document.createElement("img");
	profilePicture.id = "profile-picture";
	profilePicture.src = "/img/kai-nakamura.png";
	profilePicture.alt = "Kai Nakamura";

	// Append profile picture to sidebar
	sidebar.appendChild(profilePicture);

	// Create icon wrapper
	let iconWrapper = document.createElement("div");
	iconWrapper.id = "icon-wrapper";

	// Append icon wrapper to sidebar
	sidebar.appendChild(iconWrapper);
}