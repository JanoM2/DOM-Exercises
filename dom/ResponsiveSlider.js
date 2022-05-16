let figure = document.querySelectorAll(".mySlides");
let i = 0;
document.addEventListener("click", (e) => {
  if (e.target.matches(".next")) {
    e.preventDefault();
    figure[i].classList.remove("activado");
    i++;
    if (i >= figure.length) i = 0;
    figure[i].classList.add("activado");
  }
});

document.addEventListener("click", (e) => {
  if (e.target.matches(".prev")) {
    e.preventDefault();
    figure[i].classList.remove("activado");
    i--;
    if (i < 0) i = figure.length - 1;
    figure[i].classList.add("activado");
  }
});
