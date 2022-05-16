const d = document;
const w = window;

export default function detectarConeccion(div) {
  const online = () => {
    d.querySelector(div).innerHTML = `
    <p class="green">Coneccion Reestablecida</p>
    `;
    setTimeout(function () {
      let connect = d.querySelector(".green");
      connect.remove();
    }, 2000);
  };

  const offline = () => {
    d.querySelector(div).innerHTML = `
          <p class="red">Coneccion Perdida</p>
          `;
    setTimeout(function () {
      let disconnect = d.querySelector(".red");
      disconnect.remove();
    }, 2000);
  };

  w.addEventListener("online", online);
  w.addEventListener("offline", offline);
}
