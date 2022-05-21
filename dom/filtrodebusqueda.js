const d = document;

export default function searchFilter(input, figure) {
  let $input = d.querySelector(input);

  $input.addEventListener("keyup", (e) => {
    let $figure = d.querySelectorAll(figure);

    $figure.forEach((el) =>
      el.textContent.toLowerCase().includes(e.target.value)
        ? (el.style.display = "")
        : (el.style.display = "none")
    );
  });
}
