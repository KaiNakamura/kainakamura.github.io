import * as THREE from 'three';
import Object3D from './Object3D';

export default class Star extends Object3D {
	constructor() {
		super(
			new THREE.Mesh(
				new THREE.SphereGeometry(
					THREE.MathUtils.randFloat(0.25, 1),
					24,
					24
				),
				new THREE.MeshStandardMaterial({
					color: 0xFFFFFF
				}),
			),
			new THREE.Vector3().setFromSpherical(
				new THREE.Spherical(
					450,
					THREE.MathUtils.randFloat(0, Math.PI / 2),
					THREE.MathUtils.randFloat(0, 2 * Math.PI)
				)
			)
		)
	}
}
