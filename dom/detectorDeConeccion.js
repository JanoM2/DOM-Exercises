const d = document;
const w = window;

export default function detectarConeccion(div) {
  const online = () => {
    d.querySelector(div).innerHTML = `
    <div class="connection green">Coneccion Reestablecida</div>
    `;
    setTimeout(function () {
      let connect = d.querySelector(".green");
      connect.remove();
    }, 2000);
  };

  const offline = () => {
    d.querySelector(div).innerHTML = `
    <div class="connection red">Coneccion Perdida</div>
          `;
    setTimeout(function () {
      let disconnect = d.querySelector(".red");
      disconnect.remove();
    }, 2000);
  };

  w.addEventListener("online", online);
  w.addEventListener("offline", offline);
}
