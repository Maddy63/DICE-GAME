"use strict";
const rollDice = document.querySelector(".roll-dice");
const diceImage = document.querySelector(".dice-image");
const holdScore = document.querySelector(".hold");
const playerOne = document.querySelector(".Player-1");
const playerTwo = document.querySelector(".Player-2");
let pScore = document.querySelector(".p1Score");
let pTScore = document.querySelector(".p1TScore");
let btnNewGame = document.querySelector(".new-game");
//initial initialisation
let currentScore = 0;
let tCurrntScore = 0;
diceImage.src = "./images/start.PNG";
playerOne.classList.add("play");
playerTwo.classList.add("notPlay");
//dice roll button to change the dice image
const diceFaceChange = function () {
  if (tCurrntScore <= 100) {
    const diceNumber = Math.trunc(Math.random() * 6) + 1;
    diceImage.src = `./images/dice-${diceNumber}.PNG`;
    if (diceNumber === 1) {
      playerChange();
    } else {
      currentScore = currentScore + diceNumber;
      pScore.textContent = currentScore;
    }
  } else {
    alert(`player win with ${tCurrntScore}`);
  }
};
//hold button code to add the score to the total score
const holdPresentScore = function () {
  if (pScore === document.querySelector(".p1Score")) {
    pTScore = document.querySelector(".p1TScore");
    tCurrntScore = Number(pTScore.textContent);
  } else {
    pTScore = document.querySelector(".p2TScore");
    tCurrntScore = Number(pTScore.textContent);
  }
  tCurrntScore = tCurrntScore + currentScore;
  pTScore.textContent = tCurrntScore;
  playerChange();
};
//player change side
const playerChange = function () {
  currentScore = 0;
  pScore.textContent = currentScore;
  if (pScore === document.querySelector(".p1Score")) {
    pScore = document.querySelector(".p2Score");
    playerTwo.classList.remove("notPlay");
    playerTwo.classList.add("play");
    playerOne.classList.remove("play");
    playerOne.classList.add("notPlay");
  } else {
    pScore = document.querySelector(".p1Score");
    playerOne.classList.remove("notPlay");
    playerOne.classList.add("play");
    playerTwo.classList.remove("play");
    playerTwo.classList.add("notPlay");
  }
};
//new game button code
const resetGame = function () {
  document.querySelector(".p1TScore").textContent = 0;
  document.querySelector(".p2TScore").textContent = 0;
  document.querySelector(".p1Score").textContent = 0;
  document.querySelector(".p2Score").textContent = 0;
  pScore = document.querySelector(".p1Score");
  diceImage.src = "images/start.PNG";
};
rollDice.addEventListener("click", diceFaceChange);
holdScore.addEventListener("click", holdPresentScore);
btnNewGame.addEventListener("click", resetGame);
