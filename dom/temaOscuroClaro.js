const d = document;

export default function temas(btn, selectores) {
  const $btn = d.querySelector(btn);
  const $selectores = d.querySelectorAll(selectores);

  let luna = "🌙",
    sol = "🌞";

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      if ($btn.textContent === luna) {
        dark();
      } else {
        light();
      }
    }
  });

  const dark = () => {
    $selectores.forEach((el) => el.classList.add("dark-mode"));
    $btn.textContent = sol;
    localStorage.setItem("modo oscuro", "on");
  };

  const light = () => {
    $selectores.forEach((el) => el.classList.remove("dark-mode"));
    $btn.textContent = luna;
    localStorage.setItem("modo oscuro", "off");
  };

  if (localStorage.getItem("modo oscuro") == "on") {
    dark();
  } else {
    light();
  }
}
