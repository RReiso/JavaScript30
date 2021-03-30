window.addEventListener("keydown", (e) => {
	const audio = document.querySelector(`audio[data-key="${e.key}"]`);
	const key = document.querySelector(`.key[data-key="${e.key}"]`);
	if (!audio) return;
	playSound(audio, key);
});

window.addEventListener("click", (e) => {
	clicked = e.target.closest(".key");
	if (!clicked) return;
	const audio = document.querySelector(
		`audio[data-key="${clicked.getAttribute("data-key")}"]`
	);
	const key = document.querySelector(
		`.key[data-key="${clicked.getAttribute("data-key")}"]`
	);
  playSound(audio,key);
});

function playSound(audio, key) {
  audio.currentTime = 0;
	audio.play();
  key.classList.add("playing");
  key.addEventListener("transitionend", removeTransition);
}

function removeTransition(e){
  if (e.propertyName != "transform") return;
  this.classList.remove("playing");
}