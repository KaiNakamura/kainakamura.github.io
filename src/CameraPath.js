export default class CameraPath {
	constructor(cameraPathSections) {
		this.cameraPathSections = cameraPathSections;
	}

	moveCamera(camera, t) {
		let cameraPathSection;
		let desiredLength = t;

		for (let i = 0; i < this.cameraPathSections.length; i++) {
			let length = this.cameraPathSections[i].length;
			if (
				desiredLength <= length ||
				i == this.cameraPathSections.length - 1
			) {
				cameraPathSection = this.cameraPathSections[i];
				break;
			}
			desiredLength -= length;
		}

		let u = Math.min(1, Math.max(0, desiredLength / cameraPathSection.length));

		let position = cameraPathSection.curvePath.getPoint(u);
		let tangent = cameraPathSection.curvePath.getTangent(u);
		let target = new THREE.Vector3().lerpVectors(cameraPathSection.start, cameraPathSection.end, u);

		camera.position.set(
			position.x,
			position.y,
			position.z
		);
		camera.lookAt(target);
	}
}