document.querySelector(".sorteo").addEventListener("click", () => {
  let li = document.querySelectorAll(".li");
  let num = Math.floor(Math.random() * li.length);
  let result = li[num];

  alert(`El Ganador es ${result.textContent}`);
  console.log(num);
});
