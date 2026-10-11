const yearElement = document.getElementById("year");
const themeButton = document.getElementById("theme-toggle");

yearElement.textContent = new Date().getFullYear();

themeButton.addEventListener("click", function () {
  document.body.classList.toggle("purple-theme");

  if (document.body.classList.contains("purple-theme")) {
    themeButton.textContent = "Вернуть обычную тему ◐";
  } else {
    themeButton.textContent = "Сменить тему ◐";
  }
});