const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

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
	const t = -document.body.getBoundingClientRect().top;

	profilePicture.rotation.x = t * 0.001;
	profilePicture.rotation.z = t * 0.001;

	camera.position.x = t * -0.02 + 0;
	camera.position.y = t * 0.002 + 20;
	camera.position.z = t * 0.1 - 10;
	camera.rotation.y = t * 0.0002;
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
