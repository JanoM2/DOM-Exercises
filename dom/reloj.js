const d = document;

export default function reloj(btnPlay, btnStop, div) {
  let $div = document.querySelector(div);

  d.addEventListener("click", (e) => {
    if (e.target.matches(btnPlay)) {
      let intervaloID = setInterval(function cargarReloj() {
        d.querySelector(btnPlay).disabled = true;

        const fecha = new Date().toLocaleTimeString();

        $div.innerHTML = fecha;

        $div.style.display = "flex";
      }, 1000);

      d.addEventListener("click", (e) => {
        if (e.target.matches(btnStop)) {
          clearInterval(intervaloID);
          d.querySelector(btnPlay).disabled = false;

          $div.innerHTML = null;
        }
      });
    }
  });
}
