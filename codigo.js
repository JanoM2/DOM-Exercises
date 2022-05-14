import menu from "./dom/menu.js";
import flecha from "./dom/flecha.js";

document.addEventListener("DOMContentLoaded", (e) => {
  menu(".btnHamb", ".modal-window", ".modal-content a");
  flecha(".flecha");
});
