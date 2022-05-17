const d = document;

export default function sorteo(sorteo) {
  d.querySelector(sorteo).addEventListener("click", () => {
    let li = d.querySelectorAll(".li");
    let num = Math.floor(Math.random() * li.length);
    let result = li[num];

    alert(`El Ganador es ${result.textContent}`);
  });
}
