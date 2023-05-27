import menu from "./dom/menu.js";
import flecha from "./dom/flecha.js";
import temas from "./dom/temaOscuroClaro.js";
import reloj from "./dom/reloj.js";
import alarma from "./dom/alarma.js";
import cuentaAtras from "./dom/cuentaRegresiva.js";
import diseñoAdaptable from "./dom/ResponsiveDesign.js";
import responviseTester from "./dom/ResponsiveTester.js";
import detectorDeDispositivos from "./dom/detectorDeDispositivos.js";
import detectarConeccion from "./dom/detectorDeConeccion.js";
import detectorDeCamara from "./dom/camDetector.js";
import geolocalizacion from "./dom/geolocalizacion.js";
import sorteo from "./dom/sorteoDigital.js";
import scrollSpy from "./dom/scrollSpy.js";
import voiceReader from "./dom/lectordevoz.js";
import videoInteligente from "./dom/videoInteligente.js";
import formulario from "./dom/formularioContacto.js";
import searchFilter from "./dom/filtrodebusqueda.js";
import atajosDelTeclado from "./dom/atajosDelTeclado.js";
import { moveBall } from "./dom/moveBall.js";
import { responsiveSlider } from "./dom/ResponsiveSlider.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  menu(".btnHamb", ".modal-window", ".modal-content a");
  flecha(".flecha");
  temas(".theme", "[data-dark]");
  reloj(".reloj1", ".reloj2", "#reloj");
  alarma(".alarma1", ".alarma2", "assets/sonido-de-sirena.mp3");
  cuentaAtras(".countDown", 2023);
  diseñoAdaptable("#video", "#map");
  responsiveSlider(".mySlides", ".next", ".prev");
  responviseTester(
    "#form-tester",
    "#url",
    "#width",
    "#height",
    ".probar",
    ".cerrar"
  );
  detectorDeDispositivos(".dispositivo");
  detectarConeccion(".connection");
  detectorDeCamara("#cam");
  geolocalizacion("#geolocalizacion");
  sorteo(".sorteo");
  scrollSpy("section");
  voiceReader("#selectVoice", "#textAreaVoice", ".btnVoice");
  videoInteligente("#videoInteligente1", "#videoInteligente2");
  formulario(
    ".contact-form",
    ".contact-form [data-form]",
    ".contact-form-response",
    ".lds-ring"
  );
  searchFilter(".busqueda", ".figure");
});

d.addEventListener("keydown", (e) => {
  moveBall(e, ".ball", ".stage");
});

atajosDelTeclado();
