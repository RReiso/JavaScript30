function startClock() {
	const secondHand = document.querySelector(".hand-second");
	const minuteHand = document.querySelector(".hand-minute");
	const hourHand = document.querySelector(".hand-hour");
	setInterval(function () {
		moveClockHands(secondHand, minuteHand, hourHand);
	}, 1000);

	// setInterval(moveClockHands, 1000, secondHand, minuteHand, hourHand);
}

function moveClockHands(secondHand, minuteHand, hourHand) {
	const date = new Date();

	const seconds = date.getSeconds();
	secondsDegrees = seconds * 6; //seconds*360/60;

	const minutes = date.getMinutes();
	minutesDegrees = minutes * 6 + secondsDegrees / 60; //to ensure smooth transition instead of one movement every minute, minute-hand moves 60 times slower than second-hand

	const hours = date.getHours();
	hoursDegrees = hours * 30 + minutesDegrees / 12; //hours*360/12 + hour-hand moves 12 times slower than minute-hand

	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
	minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
	hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

startClock();
