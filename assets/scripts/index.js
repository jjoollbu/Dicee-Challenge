let randomNumber1 = Math.floor(Math.random() * 6 + 1);
let randomNumber2 = Math.floor(Math.random() * 6 + 1);

let firstImg = document.querySelector(".img1");
let secondImg = document.querySelector(".img2")

firstImg.setAttribute("src", `./assets/images/dice${randomNumber1}.png`);
secondImg.setAttribute("src", `./assets/images/dice${randomNumber2}.png`);