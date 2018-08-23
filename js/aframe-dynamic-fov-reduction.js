AFRAME.registerComponent('dynamic-fov-reduction', {
	schema: {
		strength: {type: 'number', default: 1},
		speed: {type: 'number', default: 0.2}
	},
	
	init: function () {
		var el = this.el;
		var data = this.data;
		
		// ATTACH THE MOVEMENT-CONTROLS COMPONENT TO THE CAMERA RIG
		el.setAttribute('movement-controls', {speed: data.speed, controls: 'gamepad'});
		
		// CREATE PROGRESSIVE CONTROLS
		var progressiveControls = document.createElement('a-entity');
		progressiveControls.setAttribute('progressive-controls', '');
		el.appendChild(progressiveControls);
		
		// CREATE CAMERA MANUALLY
		var camera = document.createElement('a-camera');
		camera.setAttribute('id', 'cam');
		camera.setAttribute('wasd-controls-enabled', false);
		progressiveControls.appendChild(camera);
		
		// CREATE VIGNETTE IMAGE AND SET OPACITY AND POSITION DEFAULT VALUES
		var fovFilter = document.createElement('a-image');
		fovFilter.setAttribute('src', 'assets/vignette.png');
		fovFilter.setAttribute('id', 'fov-filter');
		fovFilter.setAttribute('material', 'opacity', 0);
		// SUGGESTED VALUES TO USE WITH THE CURRENT VIGNETTE IMAGE
		// (  LEVEL 1 ≈ -0.17  ) ( LEVEL 2 ≈ -0.21 ) (LEVEL 3 ≈ -0.24)
		if (data.strength === 1) {
			fovFilter.object3D.position.z = -0.17;
		} else if (data.strength === 2) {
			fovFilter.object3D.position.z = -0.21;
		} else if (data.strength === 3) {
			fovFilter.object3D.position.z = -0.24;
		} else {
			fovFilter.object3D.position.z = 0;
			console.log("ERROR: The only accepted strength property values are 1, 2, or 3");
		}
		camera.appendChild(fovFilter);
		
		// FOV FILTER FADE IN ANIMATION WHEN MOVING AROUND
		el.addEventListener('trackpadtouchstart', function () {
			fovFilter.setAttribute('animation', {
				property: 'material.opacity',
				from: 0,
				to: 1,
				dur: 250,
				easing: 'linear'});
		});
		
		// FOV FILTER FADE OUT ANIMATION WHEN NOT MOVING AROUND
		el.addEventListener('trackpadtouchend', function () {
			fovFilter.setAttribute('animation', {
				to: 0});
		});
	}
});