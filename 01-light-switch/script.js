let dark = false;
const btn = document.querySelector("button");
btn.addEventListener("click", function (e) {
  dark = !dark;
  if (dark) {
    document.body.classList.add("body--dark");
    btn.classList.add("button-dark");
    document.title = "Good Night";
  } else {
    document.body.classList.remove("body--dark");
    btn.classList.remove("button-dark");
    document.title = "Good Morning";
  }
});
