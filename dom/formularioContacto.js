const d = document;

export default function formulario(form, input, response, loader) {
  const $form = d.querySelector(form);
  let $input = d.querySelectorAll(input);

  $input.forEach((input) => {
    const $span = d.createElement("span");
    $span.id = input.className;
    $span.textContent = input.title;
    $span.classList.add("contact-form-error", "none");
    input.insertAdjacentElement("afterend", $span);
  });

  d.addEventListener("keyup", (e) => {
    if (e.target.matches(".contact-form [required]")) {
      let $input = e.target;
      let pattern = $input.pattern || $input.dataset.pattern;

      if (pattern && $input.value !== "") {
        let regex = new RegExp(pattern);
        return !regex.exec($input.value)
          ? d.getElementById($input.classList).classList.add("is-active")
          : d.getElementById($input.classList).classList.remove("is-active");
      }

      if (!pattern) {
        return $input.value === ""
          ? d.getElementById($input.classList).classList.add("is-active")
          : d.getElementById($input.classList).classList.remove("is-active");
      }
    }
  });

  d.addEventListener("submit", (e) => {
    const $response = d.querySelector(response);
    const $loader = d.querySelector(loader);

    $loader.classList.remove("none");

    setTimeout(() => {
      $loader.classList.add("none");
      $response.classList.remove("none");
      $form.reset();

      setTimeout(() => {
        $response.classList.add("none");
      }, 3000);
    }, 3000);
  });
}
