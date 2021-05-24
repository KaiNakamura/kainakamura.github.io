import Object3D from './Object3D.js';

export default class TorusKnot extends Object3D {
	constructor(position) {
		super(
			new THREE.Mesh(
				new THREE.TorusKnotBufferGeometry(50, 10, 100, 16),
				new THREE.MeshBasicMaterial({
					color: 0x009900,
					wireframe: true
				})
			),
			position
		)
	}

	update() {
		this.object.rotation.setFromVector3(
			new THREE.Vector3(
				0.001,
				0.001,
				0.001
			).add(this.object.rotation)
		)
	}
}