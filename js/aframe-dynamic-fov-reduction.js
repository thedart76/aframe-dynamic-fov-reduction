AFRAME.registerComponent('dynamic-fov-reduction', {
    schema: {
        camera: {type: 'selector', default: '[camera]'},
        fovFilterFadeInButtons: {default: ['fovfilterstart', 'trackpadtouchstart']},
        fovFilterFadeOutButtons: {default: ['fovfilterend', 'trackpadtouchend']},
        strength: {type: 'number', default: 1},
        strength_1_value: {type: 'number', default: -0.16},
        strength_2_value: {type: 'number', default: -0.2},
        strength_3_value: {type: 'number', default: -0.24}
    },
	
	init: function () {
		var el = this.el;
		var data = this.data;
		
		// CREATE VIGNETTE IMAGE AND SET ANIMATION, OPACITY, AND POSITION DEFAULT VALUES
		var fovFilter = document.createElement('a-image');
		fovFilter.setAttribute('id', 'fov-filter');
        fovFilter.setAttribute('src', 'assets/vignette.png');
        fovFilter.setAttribute('animation', {
            property: 'material.opacity',
            from: 1,
            to: 0,
            dur: 250,
            easing: 'linear'
        });
        
        // SET THE VIGNETTE IMAGE'S DISTANCE FROM THE CAMERA
		if (data.strength === 1) {
			fovFilter.object3D.position.z = data.strength_1_value;
		} else if (data.strength === 2) {
			fovFilter.object3D.position.z = data.strength_2_value;
		} else if (data.strength === 3) {
			fovFilter.object3D.position.z = data.strength_3_value;
		} else {
			fovFilter.object3D.position.z = 0;
			console.log("ERROR: The only accepted strength property values are 1, 2, or 3");
		}
        
        // APPEND VIGNETTE IMAGE TO CAMERA
		data.camera.appendChild(fovFilter);
        
        // EMIT CUSTOM EVENTS WHEN THUMBSTICKS ARE BEING PUSHED/PULLED
        el.addEventListener('axismove', function (e) {
            var xAxis = el.components['tracked-controls'].axis[0];
            var zAxis = el.components['tracked-controls'].axis[1];
            var isOculusBrowser = AFRAME.utils.device.isOculusBrowser();
            var hand = el.getAttribute('laser-controls').hand;
            if (xAxis > 0.1 || xAxis < -0.1 || zAxis > 0.1 || zAxis < -0.1) {
                if (!isOculusBrowser && hand === 'left' || isOculusBrowser && hand === 'right') {
                    el.emit('fovfilterstart');
                }
            } else if (xAxis < 0.1 || xAxis > -0.1 || zAxis < 0.1 || zAxis > -0.1) {
                if (!isOculusBrowser && hand === 'left' || isOculusBrowser && hand === 'right') {
                    el.emit('fovfilterend');
                }
            }
        });
        
        // FOV FILTER FADE IN ANIMATION WHEN MOVING AROUND
        data.fovFilterFadeInButtons.forEach(btn => {
            el.addEventListener(btn, function (e) {
                fovFilter.setAttribute('animation', {
                    from: 0,
                    to: 1
                });
            });
        });
		
        // FOV FILTER FADE OUT ANIMATION WHEN NOT MOVING AROUND
        data.fovFilterFadeOutButtons.forEach(btn => {
            el.addEventListener(btn, function () {
                fovFilter.setAttribute('animation', {
                    from: 1,
                    to: 0
                });
            });
        });
	}
});
