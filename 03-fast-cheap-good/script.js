const fastCheck = document.querySelector("#fast");
const cheapCheck = document.querySelector("#cheap");
const goodCheck = document.querySelector("#good");
lastCheckbox = null;

function toggle(clickedCheckbox, otherCheckbox1, otherCheckbox2) {
  if (
    clickedCheckbox.checked &&
    otherCheckbox1.checked &&
    otherCheckbox2.checked
  ) {
    lastCheckbox.checked = false;
  }
  lastCheckbox = clickedCheckbox;
}

fastCheck.addEventListener("change", function () {
  toggle(fastCheck, cheapCheck, goodCheck);
});

cheapCheck.addEventListener("change", function () {
  toggle(cheapCheck, fastCheck, goodCheck);
});

goodCheck.addEventListener("change", function () {
  toggle(goodCheck, cheapCheck, fastCheck);
});
