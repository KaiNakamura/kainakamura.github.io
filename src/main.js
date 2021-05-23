import Object3D from './Object3D.js';
import Star from './Star.js';
import ProfilePicture from './ProfilePicture.js';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 500);
camera.position.set(0, 20, 0);

const renderer = new THREE.WebGLRenderer({
	canvas: document.querySelector('#bg'),
})

const light = new THREE.AmbientLight(0xFFFFFF);
scene.add(light);

const grid = new THREE.GridHelper(1000, 50, 0xFFFFFF, 0xFFFFFF);
scene.add(grid);

// Stars
Array(1000).fill().forEach(() => {new Star()});

// Profile picture
new ProfilePicture(
	new THREE.Vector3(12, 20, -30),
	camera
);

// Add all objects to scene
Object3D.objects.forEach((object) => {
	scene.add(object.object)
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
	const t = document.body.getBoundingClientRect().top;

	camera.position.x = t * 0.01;
	camera.position.y = t * -0.001 + 20;
	camera.position.z = t * -0.01;
	camera.rotation.y = t * 0.0005;

	Object3D.objects.forEach((object) => {
		object.onScroll(t)
	});
}

document.body.onscroll = onScroll;

// Animate
function animate() {
	requestAnimationFrame(animate);

	updateWindowSize();
	renderer.render(scene, camera);
}

animate();
