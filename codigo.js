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
import canvas from "./dom/EventosYAtajosTeclado.js";

document.addEventListener("DOMContentLoaded", (e) => {
  menu(".btnHamb", ".modal-window", ".modal-content a");
  flecha(".flecha");
  temas(".theme", "[data-dark]");
  reloj(".reloj1", ".reloj2", "#reloj");
  alarma(".alarma1", ".alarma2", "assets/sonido-de-sirena.mp3");
  cuentaAtras(".countDown");
  diseñoAdaptable("#video", "#map");
  responviseTester("#form-tester", "#url", "#width", "#height", ".cerrar");
  detectorDeDispositivos(".dispositivo");
  detectarConeccion(".connection");
  detectorDeCamara("#cam");
  geolocalizacion("#geolocalizacion");
  sorteo(".sorteo");
  scrollSpy("section");
  voiceReader("#selectVoice", "#textAreaVoice", ".btnVoice");
  videoInteligente("video[data-smart-video]", "#videoInteligente2");
  formulario(
    ".contact-form",
    ".contact-form [data-form]",
    ".contact-form-response",
    ".lds-ring"
  );
});

canvas("escenario");
