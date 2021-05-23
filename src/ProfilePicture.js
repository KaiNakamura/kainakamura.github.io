import * as THREE from '../node_modules/three.js';
import Object3D from './Object3D.js';

export default class ProfilePicture extends Object3D {
	constructor(position, camera) {
		super(
			new THREE.Mesh(
				new THREE.BoxGeometry(10, 10, 10),
				new THREE.MeshBasicMaterial({
					map: new THREE.TextureLoader().load('../images/kai-nakamura.png')
				}),
			),
			position,
			new THREE.Vector3(
				0,
				Math.atan2(
					camera.position.x - position.x,
					camera.position.z - position.z
				),
				0
			)
		)
	}

	onScroll(t) {
		this.object.rotation.setFromVector3(
			new THREE.Vector3(
				0,
				0.001,
				0.001
			).multiplyScalar(t).add(this.initialRotation)
		)
	}
}