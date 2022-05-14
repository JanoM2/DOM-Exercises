import menu from "./dom/menu.js";
import flecha from "./dom/flecha.js";
import temas from "./dom/temaOscuroClaro.js";

document.addEventListener("DOMContentLoaded", (e) => {
  menu(".btnHamb", ".modal-window", ".modal-content a");
  flecha(".flecha");
  temas(".theme", "[data-dark]");
});
