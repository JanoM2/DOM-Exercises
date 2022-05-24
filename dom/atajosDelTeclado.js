const d = document;

export default function atajosDelTeclado() {
  d.addEventListener("keydown", (e) => {
    if (e.altKey && e.keyCode === 65) alert("Esto es una Alerta");
  });

  d.addEventListener("keydown", (e) => {
    if (e.altKey && e.keyCode === 67) confirm("Esto es una Confirmacion");
  });

  d.addEventListener("keydown", (e) => {
    if (e.altKey && e.keyCode === 80) prompt("Esto es un Prompt");
  });
}
