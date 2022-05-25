const d = document;

export default function searchFilter(input, figure) {
  let $input = d.querySelector(input);

  $input.addEventListener("keyup", (e) => {
    let $figure = d.querySelectorAll(figure);

    $figure.forEach((el) =>
      el.textContent.toLowerCase().includes(e.target.value.toLowerCase())
        ? el.classList.remove("hidden")
        : el.classList.add("hidden")
    );
  });
}
