import Object3D from './Object3D.js';

export default class Star extends Object3D {
	constructor() {
		super(
			new THREE.Mesh(
				new THREE.SphereGeometry(
					THREE.MathUtils.randFloat(0.25, 2),
					24,
					24
				),
				new THREE.MeshStandardMaterial({
					color: 0xFFFFFF
				}),
			),
			new THREE.Vector3().setFromSpherical(
				new THREE.Spherical(
					THREE.MathUtils.randFloat(500, 900),
					THREE.MathUtils.randFloat(0, 88 * (Math.PI / 180)),
					THREE.MathUtils.randFloat(0, 2 * Math.PI)
				)
			)
		)
	}
}
