const d = document;

export default function cuentaAtras(div) {
  let fechaCuentaAtras = new Date("Jan 01, 2023 00:00:00").getTime(); // obtengo el timeStamp de la fecha

  // Intervalo de un segundo
  let intervalo = setInterval(() => {
    // el timeStamp de ahora en una variable
    let ahora = new Date().getTime();

    // la distancia entre la fecha y ahora
    let diferencia = fechaCuentaAtras - ahora;

    // calculos para los segundos, minutos, horas y dias
    let dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    let horas = Math.floor(
      (diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    let segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    if (dias < 10) dias = "0" + dias;
    if (horas < 10) horas = "0" + horas;
    if (minutos < 10) minutos = "0" + minutos;
    if (segundos < 10) segundos = "0" + segundos;

    // imprimir el valor
    d.querySelector(
      div
    ).innerHTML = `${dias}d ${horas}hs ${minutos}m ${segundos}s`;

    // si la cuenta atras termina, imprimir un texto
    if (diferencia < 0) {
      clearInterval(intervalo);
      d.querySelector(div).innerHTML = "Cuenta Regresiva Finalizada";
    }
  }, 1000);
}
