const d = document;
export default function menu($btn, $panel, $menu) {
  d.addEventListener("click", (e) => {
    if (e.target.matches($btn)) {
      d.querySelector($panel).classList.toggle("activado");
      d.querySelector($btn).classList.toggle("is-active");
    }
    if (e.target.matches($menu)) {
      d.querySelector($panel).classList.remove("activado");
      d.querySelector($btn).classList.remove("is-active");
    }
  });
}
