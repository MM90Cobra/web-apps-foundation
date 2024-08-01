const redSlider = document.querySelector("#red");
const greenSlider = document.querySelector("#green");
const blueSlider = document.querySelector("#blue");
const colorValue = document.querySelector("#color-value");

function setBackgroundColor() {
  const red = rangeValueToHex(redSlider.value);
  const green = rangeValueToHex(greenSlider.value);
  const blue = rangeValueToHex(blueSlider.value);

  const color = "#" + red + green + blue;
  document.body.style.backgroundColor = color;
  colorValue.innerText = color;
}
setBackgroundColor();

function rangeValueToHex(value) {
  value = Number.parseInt(value);
  return ("0" + value.toString(16)).substr(-2);
}

document.body.addEventListener("input", setBackgroundColor);
