"use strict";
let cl = console.log;
// GET THE ELEMENTS
let buttons = document.querySelector(".buttons");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const millSeconds = document.getElementById("millSeconds");
let start = document.querySelector(".start");
let pause = document.querySelector(".pause");
let reset = document.querySelector(".reset");
// WORK WITH START BUTTON
start.addEventListener("click", (ev) => {
	start.style.display = "none";
	pause.style.display = "block";
	reset.style.display = "none";
	let millCount = setInterval(() => {
		+millSeconds.textContent++;
		if (millSeconds.textContent === millSeconds.dataset.end) {
			millSeconds.textContent = "00";
		}
	}, 10);
	let secondsCount = setInterval(() => {
		+seconds.textContent++;
		if (seconds.textContent === seconds.dataset.end) {
			seconds.textContent = "00";
		}
	}, 1000);
	let minutesCount = setInterval(() => {
		+minutes.textContent++;
		if (minutes.textContent === minutes.dataset.end) {
			minutes.textContent = "00";
		}
	}, 60000);
	let hoursCount = setInterval(() => {
		+hours.textContent++;
		if (hours.textContent === hours.dataset.end) {
			hours.textContent = "00";
		}
	}, 60000 * 60);
	// WORK WITH PAUSE BUTTON
	pause.addEventListener("click", (ev) => {
		pause.style.display = "none";
		start.style.display = "block";
		start.textContent = "Resume";
		reset.style.display = "block";
		myClearInterval();
	});
	// WORK WITH RESET BUTTON
	reset.addEventListener("click", (ev) => {
		millSeconds.textContent = "00";
		seconds.textContent = "00";
		minutes.textContent = "00";
		hours.textContent = "00";
		myClearInterval();
		reset.style.display = "none";
		start.style.display = "block";
		start.textContent = "Start";
		pause.style.display = "none";
	});
	// Clear INTERVAL FUNCTION
	function myClearInterval() {
		clearInterval(millCount);
		clearInterval(secondsCount);
		clearInterval(minutesCount);
		clearInterval(hoursCount);
	}
});
// WORK WITH ACTIVE BUTTON
buttons.addEventListener("click", (ev) => {
	let target = ev.target;
	if (target !== buttons) {
		let childesArr = Array.from(buttons.children);
		childesArr.map((child) => child.classList.remove("active"));
		target.classList.add("active");
	}
});

