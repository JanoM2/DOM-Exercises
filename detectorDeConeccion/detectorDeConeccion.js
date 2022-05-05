const online = () => {
  document.querySelector(".connection").innerHTML = `
      <p class="green">Coneccion Reestablecida</p>
      `;
  setTimeout(function () {
    let $div = document.querySelector(".green");
    $div.remove();
  }, 2000);
};

const offline = () => {
  document.querySelector(".connection").innerHTML = `
          <p class="red">Coneccion Perdida</p>
          `;
  setTimeout(function () {
    let $div = document.querySelector(".red");
    $div.remove();
  }, 2000);
};

window.addEventListener("online", online);
window.addEventListener("offline", offline);
