# aframe-dynamic-fov-reduction

Dynamic FOV Reduction Component For A-Frame

![](https://github.com/thedart76/aframe-dynamic-fov-reduction/blob/master/aframe-dynamic-fov-reduction-v104.gif)

## Properties

| Property     | Description                                                      | Default Value |
| :----------- | :--------------------------------------------------------------- | :------------ |
| strength     | Strength of the FOV filter (can be 0, 1, 2, or 3)                | 1             |
| speed        | Movement speed                                                   | 0.2           |

💻 [**TRY THE DEMO**](https://thedart76.github.io/aframe-dynamic-fov-reduction/ "**TRY THE DEMO**")

------------

## Usage

### Requirements

The **dynamic-fov-reduction** component relies on the following components, so bear in mind that their installation is required:
- [aframe-extras / movement-controls](https://github.com/donmccurdy/aframe-extras/tree/master/src/controls "aframe-extras / movement-controls") created by Don McCurdy
- [aframe-super-hands-component / progressive-controls](https://github.com/wmurphyrd/aframe-super-hands-component#news "aframe-super-hands-component / progressive-controls") created by Will Murphy

🙏 Thank you for your amazing components, [Don](https://github.com/donmccurdy "Don") and [Will](https://github.com/wmurphyrd "Will")!

------------

### Browser Installation

Install and use by directly including the [browser files](https://github.com/thedart76/aframe-dynamic-fov-reduction/tree/master/js "browser files"), plus the required and suggested components:

	<head>
		<title>Dynamic-FOV-Reduction Component</title>
		<script src="https://aframe.io/releases/0.9.2/aframe.min.js"></script>
		<script src="https://rawcdn.githack.com/thedart76/aframe-dynamic-fov-reduction/bc4240eeb8feb777bf90e6364c73517703721471/js/aframe-dynamic-fov-reduction.min.js"></script>
		<script src="https://unpkg.com/super-hands@3.0.0/dist/super-hands.min.js"></script>
		<script src="js/progressive-controls.js"></script>
		<script src="https://cdn.jsdelivr.net/gh/donmccurdy/aframe-extras@v6.0.1/dist/aframe-extras.min.js"></script>
	</head>

### Instructions

For the **dynamic-fov-reduction** component to work correctly, you should:

**1)** Download the git project and copy the `assets` folder to the location of your HTML document (therefore the path would be `assets/vignette.png`).

**2)** Use a camera rig and attach the component to it

For example:

	<!-- CAMERA RIG | DYNAMIC-FOV-REDUCTION COMPONENT -->
	<a-entity id="cam-rig" dynamic-fov-reduction="strength: 1">
		<a-camera></a-camera>
	</a-entity>
    
**3)** Serve progressive-controls.js yourself. You can find the file here:
- [progressive-controls source file](https://github.com/wmurphyrd/aframe-super-hands-component/blob/dc1a601b7fa9d606a05ec2d3500f8f141c65c20c/misc_components/progressive-controls.js "aframe-super-hands-component / progressive-controls") created by Will Murphy

### Important Notes

⚠️ Because of the order-dependent rendering in A-Frame, make sure to place the lines of code for the camera rig and its child entities at the bottom of the HTML mark-up.

⚠️ If you are going to use aframe-super-hands-component v3.0.0, you can find instructions on how to use progressive-controls [here](https://github.com/wmurphyrd/aframe-super-hands-component#news "here").

------------

👀 [**VIEW THE DEMO SOURCE CODE**](https://github.com/thedart76/aframe-dynamic-fov-reduction/blob/master/index.html "**VIEW THE DEMO SOURCE CODE**")


👀 [**VIEW THE COMPONENT SOURCE CODE**](https://github.com/thedart76/aframe-dynamic-fov-reduction/blob/master/js/aframe-dynamic-fov-reduction.js "**VIEW THE COMPONENT SOURCE CODE**")

------------

## License

Distributed under an [MIT License](https://github.com/thedart76/aframe-blink-teleportation/blob/master/LICENSE "MIT License").

Designed an coded by Danilo Pasquariello - [June 2018](https://twitter.com/theDart76/status/1012580964244054017 "June 2018")
