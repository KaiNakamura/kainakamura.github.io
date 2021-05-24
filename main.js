const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);

const renderer = new THREE.WebGLRenderer({
	canvas: document.querySelector('#bg'),
});

scene.add(new THREE.AmbientLight(0xFFFFFF));

scene.add(new THREE.GridHelper(1000, 50, 0xFFFFFF, 0xFFFFFF));

const profilePicture = new THREE.Mesh(
	new THREE.BoxGeometry(10, 10, 10),
	new THREE.MeshBasicMaterial({
		map: new THREE.TextureLoader().load('images/kai-nakamura.png')
	})
);
profilePicture.position.set(12, 20, -30);
profilePicture.lookAt(camera.position);
scene.add(profilePicture);

const torusKnot = new THREE.Mesh(
	new THREE.TorusKnotGeometry(50, 10, 100, 16),
	new THREE.MeshBasicMaterial({
		color: 0x009900,
		wireframe: true
	})
);
torusKnot.position.set(12, 20, -30);
scene.add(torusKnot);

Array(1000).fill().forEach(() => {
	let star = new THREE.Mesh(
		new THREE.SphereGeometry(0.5, 24, 24),
		new THREE.MeshStandardMaterial({
			color: 0xFFFFFF
		})
	);
	let [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(1000));
	star.position.set(x, y, z);
	scene.add(star)
});

// Update window size
function updateWindowSize() {
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(window.innerWidth, window.innerHeight);
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
}

// On scroll
function onScroll() {
	// Find the height of the page
	// Different browsers use different names
	const height = Math.max(
		document.body.scrollHeight,
		document.body.offsetHeight,
		document.documentElement.clientHeight,
		document.documentElement.scrollHeight,
		document.documentElement.offsetHeight
	) - window.innerHeight;

	// Get scroll position from [0, 1]
	const t = -document.body.getBoundingClientRect().top / height;

	profilePicture.rotation.x = 4 * t;
	profilePicture.rotation.z = 4 * t;

	camera.position.x = -80 * t + 0;
	camera.position.y = 8 * t + 20;
	camera.position.z = 400 * t - 10;
	camera.rotation.y = 0.8 * t;
}

document.body.onscroll = onScroll;
onScroll();

// Animate
function animate() {
	requestAnimationFrame(animate);
	updateWindowSize();

	torusKnot.rotation.x += 0.001;
	torusKnot.rotation.y += 0.0005;
	torusKnot.rotation.z += 0.001;

	renderer.render(scene, camera);
}

animate();
