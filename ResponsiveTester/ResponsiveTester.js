const d = document;
const w = window;

export default function responviseTester() {
  let form = d.querySelector("#form-tester");
  form.addEventListener("submit", () => {
    let url = form.querySelector("#url"),
      width = form.querySelector("#width"),
      height = form.querySelector("#height");

    let ventana;
    ventana = w.open(
      url.value,
      url.value,
      `innerWidth=${width.value}, innerHeight=${height.value}`
    );

    document.addEventListener("click", (e) => {
      if (e.target.matches(".cerrar")) {
        // e.preventDefault();
        ventana.close();
      }
    });
  });
}
