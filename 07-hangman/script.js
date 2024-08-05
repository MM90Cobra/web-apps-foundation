const words = ["flexbox", "juni", "bootcamp", "javascript"];
const currentWord = "flexbox";
const guess = [];

const outputGuess = document.querySelector("#output");
const allButtons = document.querySelectorAll("#letters button");
const newGameButton = document.querySelector("#gameMenu button");
const fails = document.querySelector("#fails");
const gameState = document.querySelector("#gameState");

let countFails = 0;

initGame();

function initGame() {
  initGuess();
  initEventListeners();
  fails.innerText = "Fails: 0/10";
  countFails = 0;
  gameState.innerText = "ACTIVE";

  // allButtons.forEach(function (mybutton) {
  //   mybutton.target.disabled = true;
  // });
}

function initGuess() {
  if (guess[0] !== undefined) {
    for (const element of currentWord) {
      guess.pop();
    }
  }

  for (const letter of currentWord) {
    guess.push("_");
  }

  renderGuess();
}

function renderGuess() {
  const guessStr = guess.join("");

  outputGuess.innerText = guessStr;
}

function initEventListeners() {
  allButtons.forEach(function (button) {
    button.addEventListener("click", handleLetterClick);
    newGameButton.addEventListener("click", handleNewGameButtonClick);
  });
}

function gameEnds() {
  allButtons.forEach(function (button) {
    button.removeEventListener("click", handleLetterClick);
  });
}

function handleLetterClick(event) {
  const clickedBtn = event.target;
  const letter = clickedBtn.innerText;

  // Geklickter Button: deaktivieren
  clickedBtn.disabled = true;

  // Kommt letter in currentWord vor?
  // Wenn nein: Funktion beenden
  if (currentWord.includes(letter) === false) {
    countFails += 1;
    console.log(countFails);
    fails.innerText = "Fails: " + countFails + "/10";

    if (countFails >= 10) {
      console.log("Game Over");
      gameState.innerText = "Game Over";
      gameEnds();
    }

    return;
  }

  // Wenn ja: Buchstabe soll an richtiger Stelle in #output ausgegeben werden
  checkGuess(letter);
}

function handleNewGameButtonClick(event) {
  initGame();
}

function checkGuess(guessedLetter) {
  // jeden Buchstaben von currentWord angucken und mit letter vergleichen
  for (let i = 0; i < currentWord.length; i++) {
    const currentLetter = currentWord[i];

    // ist currentLetter gleich guessedLetter?
    if (currentLetter === guessedLetter) {
      // An der gleichen Stelle im guess Array, den Unterstrich austauschen gegen den geratenen Buchstaben
      guess[i] = guessedLetter;
    }

    renderGuess();

    if (currentWord === outputGuess.innerText) {
      console.log("You Win!");
      gameState.innerText = "You Win!";
      gameEnds();
    }
  }
}
