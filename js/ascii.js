window.onload = function() {
	"use strict";

	let speed = 250;
	let turbo = false;
	let timer = null;
	let frameCounter = 0;
	let animText = "";

	// Get array of frames from the text area
	//start animation and enable stop button
	let startButton = document.getElementById("start");
	startButton.onclick = function() {
		setItemStates(true);
		animText = document.getElementById("text-area").value;
		frames = animText.split("=====");
		startTimer();
	};

	// clear time interval and disable stop button when stop button is clicked
	let stopButton = document.getElementById("stop");
	stopButton.onclick = function() {
		stopTimer();
		frameCounter = 0;
		setItemStates(false);
		document.getElementById("text-area").value = animText;
	};

	// set the textarea front size when user selects a font size
	let animSize = document.getElementById("fontsize");
	animSize.onchange = function() {
		document.getElementById("text-area").style.fontSize = animSize.value;
	};

	// Manage animation changes. set text area with selected animation.
	let animation = document.getElementById("animation");
	animation.onchange = function() {
		let anim = animation.value;

		// place the animation in the textarea
		document.getElementById("text-area").value = ANIMATIONS[anim];
	};

	// Change animation speed to turbo when selected.
	let turboSpeed = document.getElementById("turbo");
	turboSpeed.onchange = function() {
		turbo = !turbo;
		speed = turbo ? 50 : 250;
		stopTimer();
		startTimer();
	};

	// function enable items to avoid repetition
	function setItemStates(isEnabled) {
		startButton.disabled = isEnabled;
		animation.disabled = isEnabled;
		stopButton.disabled = !isEnabled;
	}

	// function to stop animation interval
	function stopTimer() {
		clearInterval(timer);
		timer = null;
	}

	// function to start animation interval
	function startTimer() {
		timer = setInterval(displayFrame, speed, frames);

	}

	// function displays frame and using the 
	//modulus operand to stay within the array size
	function displayFrame(frames) {
		document.getElementById("text-area").value =
			frames[frameCounter % frames.length];
		frameCounter += 1;
	}
};