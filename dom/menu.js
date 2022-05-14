const d = document;
export default function menu($btn, $panel, $menu) {
  d.addEventListener("click", (e) => {
    if (e.target.matches($btn)) {
      d.querySelector($panel).classList.toggle("activado");
      d.querySelector($btn).classList.toggle("is-active");
    }
    if (e.target.matches($menu)) {
      d.querySelector($panel).classList.remove("activado");
      d.querySelector($btn).classList.remove("is-active");
    }
  });
}

// // Tema Oscuro y Tema Claro

// const $btn = document.querySelector(".theme");
// const $selectores = document.querySelectorAll("[data-dark]");
// let luna = "🌙",
//   sol = "🌞";

// $btn.addEventListener("click", () => {
//   if ($btn.textContent === luna) {
//     dark();
//   } else {
//     light();
//   }
// });

// const dark = () => {
//   $selectores.forEach((el) => el.classList.add("dark-mode"));
//   $btn.textContent = sol;
//   localStorage.setItem("modo oscuro", "on");
// };

// const light = () => {
//   $selectores.forEach((el) => el.classList.remove("dark-mode"));
//   $btn.textContent = luna;
//   localStorage.setItem("modo oscuro", "off");
// };

// if (localStorage.getItem("modo oscuro") == "on") {
//   dark();
// } else {
//   light();
// }
