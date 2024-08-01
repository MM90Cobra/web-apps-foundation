const words = ["flexbox", "juni", "bootcamp", "javascript"];
const currentWord = "flexbox";
const guess = [];

const outputGuess = document.querySelector("#output");
const allButtons = document.querySelectorAll("#letters button");

initGame();

function initGame() {
  initGuess();
  initEventListeners();
}

function initGuess() {
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
    return;
  }

  // Wenn ja: Buchstabe soll an richtiger Stelle in #output ausgegeben werden
  checkGuess(letter);
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
  }
}
