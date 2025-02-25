const d = document;

export default function cuentaAtras(div) {
  const año = new Date().getFullYear() + 1;
  let fechaCuentaAtras = new Date(`Jan 01, ${año} 00:00:00`).getTime();

  let intervalo = setInterval(() => {
    let ahora = new Date().getTime();

    let diferencia = fechaCuentaAtras - ahora;

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

    d.querySelector(
      div
    ).innerHTML = `${dias}d ${horas}hs ${minutos}m ${segundos}s`;

    if (diferencia < 0) {
      clearInterval(intervalo);
      d.querySelector(div).innerHTML = "Cuenta Regresiva Finalizada";
    }
  }, 1000);
}
