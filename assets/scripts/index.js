let randomNumber1 = Math.floor(Math.random() * 6 + 1);
let randomNumber2 = Math.floor(Math.random() * 6 + 1);


let firstImg = document.querySelector(".img1");
let secondImg = document.querySelector(".img2")
let winnerTitle = document.querySelector("h1")

firstImg.setAttribute("src", `./assets/images/dice${randomNumber1}.png`);
secondImg.setAttribute("src", `./assets/images/dice${randomNumber2}.png`);

function gameWinner() {
    if (randomNumber1 > randomNumber2) {
        winnerTitle.textContent = "🚩 Player 1 wins!"; // Alterado para textContent
    } else if (randomNumber2 > randomNumber1) {
        winnerTitle.textContent = "Player 2 wins! 🚩";
    } else {
        winnerTitle.textContent = "Draw!";
    }
}

gameWinner();