document.addEventListener("DOMContentLoaded", () => {

    let score = 0;
    let scored = false;
    let gameStarted = false;
    let isAlive;

    const bug = document.getElementById("bug");
    const lightbulb = document.getElementById("lightbulb");
    const startScreen = document.getElementById("start-screen");
    const startButton = document.getElementById("start-button");
    const scoreDisplay = document.getElementById("score");
    const revealButton = document.getElementById("reveal-button");

    // Initially hide reveal button
    revealButton.classList.remove("story-visible");

    function jump() {
        if (!bug.classList.contains("jump")) {
            bug.classList.add("jump");

            setTimeout(function () {
                bug.classList.remove("jump");
            }, 300);
        }
    }

    function startGame() {
        startScreen.style.display = "none";
        score = 0;
        scored = false;
        gameStarted = true;
        scoreDisplay.innerText = "Score: 0";
        lightbulb.classList.remove("paused");

        // Hide reveal button again on restart
        revealButton.classList.remove("story-visible");

        isAlive = setInterval(function () {
            let bugTop = parseInt(window.getComputedStyle(bug).getPropertyValue("top"));
            let lightbulbLeft = parseInt(window.getComputedStyle(lightbulb).getPropertyValue("left"));

            if (lightbulbLeft < 50 && lightbulbLeft > 0 && bugTop >= 250) {
                scoreDisplay.innerText = "Game Over!";
                clearInterval(isAlive);
                gameStarted = false;
                startScreen.style.display = "flex";
                lightbulb.classList.add("paused");
            }

            if (lightbulbLeft < 0 && !scored) {
                score++;
                scored = true;
                scoreDisplay.innerText = "Inspiration: " + score;

                if (score >= 10) {
                    scoreDisplay.innerText = "You're inspired!";
                    revealButton.classList.add("story-visible");
                }
            }

            if (lightbulbLeft > 200) {
                scored = false;
            }
        }, 10);
    }

    document.addEventListener("keydown", () => {
        jump();
    });

    startButton.addEventListener("click", startGame);

    revealButton.addEventListener("click", () => {
        window.location.href = "7_showcase.html";
    });

});
