// Menu

const $menu = document.querySelector(".hamburger");

$menu.addEventListener(
  "click",
  () => {
    $menu.classList.toggle("is-active");
    document.querySelector(".modal-window").classList.toggle("activado");
  },
  false
);

// Flecha

const $flecha = document.querySelector(".flecha");
const $body = document.querySelector("body");

document.addEventListener(
  "scroll",
  () => {
    let limite = $body.getBoundingClientRect();
    if (limite.y < -200) {
      $flecha.classList.remove("hidden");
    } else {
      $flecha.classList.add("hidden");
    }
  },
  false
);

$flecha.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

// Tema Oscuro y Tema Claro

const $btn = document.querySelector(".theme");
const $selectores = document.querySelectorAll("[data-dark]");
let luna = "🌙",
  sol = "🌞";

$btn.addEventListener("click", () => {
  if ($btn.textContent === luna) {
    dark();
  } else {
    light();
  }
});

const dark = () => {
  $selectores.forEach((el) => el.classList.add("dark-mode"));
  $btn.textContent = sol;
  localStorage.setItem("modo oscuro", "on");
};

const light = () => {
  $selectores.forEach((el) => el.classList.remove("dark-mode"));
  $btn.textContent = luna;
  localStorage.setItem("modo oscuro", "off");
};

if (localStorage.getItem("modo oscuro") == "on") {
  dark();
} else {
  light();
}
