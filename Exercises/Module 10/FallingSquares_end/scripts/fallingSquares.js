const leftArrow = 37;
const rightArrow = 39;

let counterSuccess = 0;
let counterFail = 0;
let marginLeftRacket = 0;
let marginTopBall = 0;

let ball = document.createElement("div");
let ballXLocation;

let timer;

let counterDivSuccess = document.getElementById("counterDivSuccess");
let counterDivFail = document.getElementById("counterDivFail");
let racket = document.getElementById("racket");
let playGround = document.getElementById("playGround");

const playGroundWidth = playGround.clientWidth;
const playGroundHeight = playGround.clientHeight;
const racketWidth = racket.clientWidth;

counterDivSuccess.innerText = counterSuccess;
counterDivFail.innerText = counterFail;
ball.className = "ball";
setBallPosition();

document.addEventListener("keydown", function checkKeyEvent(ev) {
	ev = ev || window.event;

	if (ev.keyCode === leftArrow) {
		if (marginLeftRacket === 0) return;

		marginLeftRacket -= 10;
	} else if (ev.keyCode === rightArrow) {
		if (marginLeftRacket + racketWidth === playGroundWidth) return;

		marginLeftRacket += 10;
	}

	racket.setAttribute("style", "margin-left: " + marginLeftRacket + "px;");
});

function setBallPosition() {
	ballXLocation = Math.floor(Math.random() * (playGroundWidth - racketWidth));
	let ballStyle = "margin-left:" + ballXLocation + "px;";
	ball.setAttribute("style", ballStyle);
	playGround.appendChild(ball);

	timer = setInterval(function() {
		if (marginTopBall > playGroundHeight) {
			counterFail++;
			counterDivFail.innerText = counterFail;
			initBall();
			return;
		} else if (
			marginTopBall === playGroundHeight &&
			ballXLocation > marginLeftRacket &&
			ballXLocation < marginLeftRacket + racketWidth
		) {
			counterSuccess++;
			counterDivSuccess.innerText = counterSuccess;
			initBall();
			return;
		}

		marginTopBall += 10;
		ballStyle = ballStyle.concat("margin-top:" + marginTopBall + "px;");
		ball.setAttribute("style", ballStyle);
	}, 150);
}

function initBall() {
	playGround.removeChild(ball);
	clearInterval(timer);
	setBallPosition();
	marginTopBall = 0;
}
