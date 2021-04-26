window.addEventListener("keydown", (e) => {
	const audio = document.querySelector(`audio[data-key="${e.key}"]`); //find audio with specific data key
	const key = document.querySelector(`.key[data-key="${e.key}"]`); //find element with .key class with specific data-key
	if (!audio) return;
	playSound(audio, key);
});

// window.addEventListener("click", (e) => {
// 	clicked = e.target.closest(".key");
// 	if (!clicked) return;
// 	const audio = document.querySelector(
// 		`audio[data-key="${clicked.getAttribute("data-key")}"]`
// 	);
// 	const key = document.querySelector(
// 		`.key[data-key="${clicked.getAttribute("data-key")}"]`
// 	);
//   playSound(audio,key);
// });

function playSound(audio, key) {
	audio.currentTime = 0; //if audio is playing, set it back to 0.
	audio.play();
	key.classList.add("playing");
	key.addEventListener("transitionend", removeTransition); //transitionEnd fires twice- as it finishes transitioning to the transitioned state, and when it fully reverts to the default or non-transitioned state
}

function removeTransition(e){
	if (e.propertyName != "transform") return;
	this.classList.remove("playing"); //remove class once the longest transition (here:transform) has finished transitioning. "this" referes to key.
}


window.addEventListener("click", touchStart);
window.addEventListener("touchstart", touchStart, false);

console.log("jauns2");

function touchStart(e) {
	clicked = e.target.closest(".key");
	if (!clicked) return;
	const audio = document.querySelector(
		`audio[data-key="${clicked.getAttribute("data-key")}"]`
	);
	const key = document.querySelector(
		`.key[data-key="${clicked.getAttribute("data-key")}"]`
	);
	playSound(audio, key);
}