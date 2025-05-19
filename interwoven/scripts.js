let score = 0;
let scored=false;

const bug = document.getElementById("bug");
const lightbulb = document.getElementById("lightbulb");

function jump() {
	if (bug.classList != "jump") {
		bug.classList.add("jump");
	
		setTimeout(function () {
			bug.classList.remove("jump");
		}, 300);
	}
}

let isAlive = setInterval(function () {
	// Get current bug Y position
	let bugTop = parseInt(window.getComputedStyle(bug).getPropertyValue("top"));
		
	// Get current lightbulb X position
	let lightbulbLeft = parseInt(
		window.getComputedStyle(lightbulb).getPropertyValue("left")
		);
	
	
	// detect collision
	if (lightbulbLeft < 50 && lightbulbLeft > 0 && bugTop >= 250) {
		// collison
		alert("Game Over!");
	}
	
	// Score when lightbulb passes and bug has jumped over it
	if (lightbulbLeft < 0 && !scored) {
		score++;
		scored = true;
		console.log("Score: " + score); // or update an element on the screen
		document.getElementById("score").innerText = "Score: " + score;
	}

	// Reset scored when lightbulb goes back to the right
	if (lightbulbLeft > 200) {
		scored = false;
	}
}, 10);

	document.addEventListener("keydown", function (event) {
		jump();
});