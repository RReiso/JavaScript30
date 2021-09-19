const pressed = [];
const secretCode = "ruta";
const image = document.querySelector("img");

window.addEventListener("keyup", (e) => {
	pressed.push(e.key);
	pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
	if (pressed.join("").includes(secretCode)) {
		image.classList.remove("no-display");
	}
	console.log(pressed);
});
