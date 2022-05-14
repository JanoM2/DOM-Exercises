export default function flecha(flecha) {
  const d = document;
  const w = window;
  const $body = document.querySelector("body");
  const $flecha = d.querySelector(flecha);

  w.addEventListener("scroll", () => {
    let limite = $body.getBoundingClientRect();
    if (limite.y < -200) {
      $flecha.classList.remove("hidden");
    } else {
      $flecha.classList.add("hidden");
    }
  });

  d.addEventListener("click", (e) => {
    if (e.target.matches(flecha)) {
      w.scrollTo(0, 0);
    }
  });
}
