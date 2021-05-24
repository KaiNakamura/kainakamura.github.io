import Object3D from './Object3D.js';
import Star from './Star.js';
import ProfilePicture from './ProfilePicture.js';
import TorusKnot from './TorusKnot.js';
import Pose from './Pose.js';
import CameraPathSection from './CameraPathSection.js';
import CameraPath from './CameraPath.js';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
const cameraPath = new CameraPath([
	new CameraPathSection(
		500,
		new THREE.Vector3(0, 20, -10),
		new THREE.Vector3(-50, 20, -10),
		[
			new Pose(
				new THREE.Vector3(0, 20, 0),
				new THREE.Vector3(0, 0, 0)
			),
			new Pose(
				new THREE.Vector3(0, 20, 200),
				new THREE.Vector3(0, 0, 0)
			),
		]
	),
	new CameraPathSection(
		1000,
		new THREE.Vector3(-50, 20, -10),
		new THREE.Vector3(-100, 20, 100),
		[
			new Pose(
				new THREE.Vector3(0, 20, 200),
				new THREE.Vector3(100, 0, 0)
			),
			new Pose(
				new THREE.Vector3(200, 100, 200),
				new THREE.Vector3(0, 0, 0)
			),
		]
	),
	new CameraPathSection(
		1000,
		new THREE.Vector3(-100, 20, 100),
		new THREE.Vector3(-250, 20, 200),
		[
			new Pose(
				new THREE.Vector3(200, 100, 200),
				new THREE.Vector3(0, 0, 0)
			),
			new Pose(
				new THREE.Vector3(-100, 20, 200),
				new THREE.Vector3(0, 0, 0)
			),
		]
	),
]);

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

new TorusKnot(
	new THREE.Vector3(12, 20, -30)
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
	const t = -document.body.getBoundingClientRect().top;

	cameraPath.moveCamera(camera, t);

	Object3D.objects.forEach((object) => {
		object.onScroll(t)
	});
}

document.body.onscroll = onScroll;
onScroll();

// Animate
function animate() {
	requestAnimationFrame(animate);

	Object3D.objects.forEach((object) => {
		object.update()
	});

	updateWindowSize();
	renderer.render(scene, camera);
}

animate();
