import menu from "./dom/menu.js";
import flecha from "./dom/flecha.js";
import temas from "./dom/temaOscuroClaro.js";
import reloj from "./dom/reloj.js";
import alarma from "./dom/alarma.js";
import cuentaAtras from "./dom/cuentaRegresiva.js";
import diseñoAdaptable from "./dom/ResponsiveDesign.js";
import responviseTester from "./ResponsiveTester/ResponsiveTester.js";

document.addEventListener("DOMContentLoaded", (e) => {
  menu(".btnHamb", ".modal-window", ".modal-content a");
  flecha(".flecha");
  temas(".theme", "[data-dark]");
  reloj(".reloj1", ".reloj2", "#reloj");
  alarma(".alarma1", ".alarma2", "assets/sonido-de-sirena.mp3");
  cuentaAtras(".countDown");
  diseñoAdaptable("#video", "#map");
  responviseTester("#form-tester", "#url", "#width", "#height", ".cerrar");
});
