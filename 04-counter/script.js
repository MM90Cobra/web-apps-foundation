let counter = 0;
let colorCounter = 0;
const label = document.querySelector("label");

function increaseCounter() {
  counter++;
  label.innerText = counter;

  colorCounter++;
  if (colorCounter === 101) {
    colorCounter = 1;
  }
  main.style.setProperty("--counter", colorCounter + "%");
}
const main = document.querySelector("main");
main.addEventListener("click", increaseCounter);

function resetCounter() {
  counter = 0;
  colorCounter = 0;
  label.innerText = counter;
  main.style.setProperty("--counter", 0 + "%");
  button.blur();
}
const button = document.querySelector("button");
button.addEventListener("click", resetCounter);

document.addEventListener("keypress", function (e) {
  console.log(e.key);
  if (["Enter", " "].includes(e.key)) {
    increaseCounter();
  }
});
