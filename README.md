# aframe-dynamic-fov-reduction

Dynamic FOV Reduction Component For A-Frame

![](https://github.com/thedart76/aframe-dynamic-fov-reduction/blob/master/aframe-dynamic-fov-reduction-v104-512.gif)

## Properties

| Property                | Description                                                      | Default Value |
| :---------------------- | :--------------------------------------------------------------- | :------------ |
| strength                | Strength of the FOV filter (can be 0, 1, 2, or 3)                | 1             |
| strength_1_value        | Vignette image's distance from camera                            | -0.16         |
| strength_2_value        | Vignette image's distance from camera                            | -0.2          |
| strength_3_value        | Vignette image's distance from camera                            | -0.24         |

💻 [**TRY THE DEMO**](https://thedart76.github.io/aframe-dynamic-fov-reduction/ "**TRY THE DEMO**")

------------

## Usage

### Requirements

The **dynamic-fov-reduction** component relies on the following components, so bear in mind that their installation is required:
- [aframe-extras / movement-controls](https://github.com/donmccurdy/aframe-extras/tree/master/src/controls "aframe-extras / movement-controls") created by Don McCurdy

🙏 Thank you for your amazing component, [Don](https://github.com/donmccurdy "Don")!

------------

### Browser Installation

Install and use by directly including the [browser files](https://github.com/thedart76/aframe-dynamic-fov-reduction/tree/master/js "browser files"), plus the required component `aframe-extras`:

	<head>
        <title>Dynamic-FOV-Reduction Component | A-Frame</title>
        <script src="https://aframe.io/releases/1.0.4/aframe.min.js"></script>
        <script src="https://raw.githack.com/thedart76/aframe-dynamic-fov-reduction/master/js/aframe-dynamic-fov-reduction.min.js"></script>
        <!-- REQUIRED COMPONENT -->
        <script src="https://cdn.jsdelivr.net/gh/donmccurdy/aframe-extras@v6.1.0/dist/aframe-extras.min.js"></script>
    </head>

### Instructions

For the **dynamic-fov-reduction** component to work correctly, you should:

**1)** Download the git project and copy the `assets` folder to the location of your HTML document (therefore the path would be `assets/vignette.png`).

**2)** Structure your code as the below example:

	<!-- CAMERA RIG -->
    <a-entity movement-controls="controls: gamepad">
        <!-- DYNAMIC-FOV-REDUCTION COMPONENT -->
        <a-entity laser-controls="hand: right" raycaster="objects: .clickable" dynamic-fov-reduction>
        </a-entity>
        <!-- DYNAMIC-FOV-REDUCTION COMPONENT -->
        <a-entity laser-controls="hand: left" raycaster="objects: .clickable" dynamic-fov-reduction>
        </a-entity>
        <!-- CAMERA -->
        <a-camera id="cam" wasd-controls-enabled="false"></a-camera>
    </a-entity>

### Important Notes

⚠️ Because of the order-dependent rendering in A-Frame, make sure to place the lines of code for the camera rig and its child entities at the bottom of the HTML mark-up.

⚠️ The raycaster component uses selective intersections (objects: .clickable) for two reasons:
1) The vignette image will not be intersected
2) It is best practice to do so in any of your projects

------------

👀 [**VIEW THE DEMO'S SOURCE CODE**](https://github.com/thedart76/aframe-dynamic-fov-reduction/blob/master/index.html "**VIEW THE DEMO'S SOURCE CODE**")


👀 [**VIEW THE COMPONENT'S SOURCE CODE**](https://github.com/thedart76/aframe-dynamic-fov-reduction/blob/master/js/aframe-dynamic-fov-reduction.js "**VIEW THE COMPONENT'S SOURCE CODE**")

------------

## License

Distributed under an [MIT License](https://github.com/thedart76/aframe-blink-teleportation/blob/master/LICENSE "MIT License").

Designed an coded by Danilo Pasquariello - [June 2018](https://twitter.com/theDart76/status/1012580964244054017 "June 2018")
