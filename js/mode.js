let checkbox = document.querySelector("input[name=mode]");

checkbox.addEventListener("change", () => {
  document.querySelector("main").classList.toggle("theme-dark");
  document.querySelector("main").classList.toggle("theme-light");
});
