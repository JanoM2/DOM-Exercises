const $reloj1 = document.querySelector(".reloj1");
const $reloj2 = document.querySelector(".reloj2");
const $alarma1 = document.querySelector(".alarma1");
const $alarma2 = document.querySelector(".alarma2");

$reloj1.addEventListener("click", () => {
  // creando el intervalo y su ID, y seleccionando el div para imprimir
  let intervaloID = setInterval(function cargarReloj() {
    let $div = document.querySelector("#reloj");

    // deshabilitando el boton de inicar
    $reloj1.disabled = true;

    // variable con el horario
    const fecha = new Date().toLocaleTimeString();

    // imprimiendo la hora
    $div.innerHTML = fecha;

    // estilos
    $div.style.display = "flex";
  }, 1000);

  // escuchando el evento
  $reloj2.addEventListener("click", ($div) => {
    // frenando el intervalo y habilitando el boton inicar
    clearInterval(intervaloID);
    $reloj1.disabled = false;

    // vaciando el reloj
    $div = document.querySelector("#reloj");
    $div.innerHTML = null;
  });
});

$alarma1.addEventListener("click", () => {
  // agarrando el elemento audio y seteando sus botones
  const musica = document.querySelector("audio");
  musica.setAttribute("controls", "none");
  musica.setAttribute("preload", "auto");
  musica.play();

  $alarma1.disabled = true;

  $alarma2.addEventListener("click", () => {
    musica.currentTime = 0;
    musica.pause();
    $alarma1.disabled = false;
  });
});
