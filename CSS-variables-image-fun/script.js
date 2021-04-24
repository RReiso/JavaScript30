inputs = document.querySelectorAll("input");
inputs.forEach((input) => {
	input.addEventListener("input", handleUpdate); //The input event is fired every time the value of the element changes. This is unlike the change event, which only fires when the value is committed, such as by pressing the enter key, selecting a value from a list of options, and the like.
});

function handleUpdate() {
	suffix = this.dataset.sizing || "";
	document.documentElement.style.setProperty(
		`--${this.name}`,
		this.value + suffix
	);
}
