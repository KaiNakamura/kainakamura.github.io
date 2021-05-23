import * as THREE from 'three';

export default class Object3D {
	static objects =[];

	constructor(
		object,
		position = new THREE.Vector3(),
		rotation = new THREE.Vector3(),
	) {
		this.object = object;
		this.initialPosition = position;
		this.initialRotation = rotation;
		this.object.position.set(
			position.x,
			position.y,
			position.z
		);
		this.object.rotation.setFromVector3(rotation);
		Object3D.objects.push(this);
	}

	update() { }

	onScroll(t) { }
}