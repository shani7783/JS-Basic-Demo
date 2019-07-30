let isPlayerOne = true;
let counter = 0;

document.addEventListener("DOMContentLoaded", setupGame);

function setupGame() {
	let boxes = document.querySelectorAll(".box");
	for (let i = 0; i < boxes.length; i++) {
		boxes[i].addEventListener("click", clickBox);		
	}
}

function clickBox(event) {
	let currentElement = event.currentTarget;
	if (isPlayerOne) {
		currentElement.classList.add("player-one");
	} else {
		currentElement.classList.add("player-two");
	}
	isPlayerOne = !isPlayerOne;
	currentElement.removeEventListener("click", clickBox);
	counter ++;
	
	if (counter === 9) {
		let endElement = document.querySelector(".end-message");
		endElement.innerText = "The end!";
	}
}
