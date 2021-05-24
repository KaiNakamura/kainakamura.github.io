export default class CameraPathSection {
	constructor(length, start, end, poses) {
		if (poses.length < 2) {
			throw 'Camera path requires at least 2 poses but found only ' + poses.length;
		}

		this.length = length;
		this.start = start;
		this.end = end;
		this.curvePath = new THREE.CurvePath();

		for (let i = 0; i < poses.length - 1; i++) {
			let startPose = poses[i];
			let endPose = poses[i + 1];

			let curve = new THREE.CubicBezierCurve3(
				startPose.position,
				new THREE.Vector3().addVectors(startPose.position, startPose.direction),
				new THREE.Vector3().subVectors(endPose.position, endPose.direction),
				endPose.position
			);

			this.curvePath.add(curve);
		}
	}
}