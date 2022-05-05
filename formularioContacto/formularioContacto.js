const $form = document.querySelector(".contact-form");
const $input = document.querySelectorAll(".contact-form [data-form]");

$input.forEach((input) => {
  const $span = document.createElement("span");
  $span.id = input.className;
  $span.textContent = input.title;
  $span.classList.add("contact-form-error", "none");
  input.insertAdjacentElement("afterend", $span);
});

document.addEventListener("keyup", (e) => {
  if (e.target.matches(".contact-form [required]")) {
    let $input = e.target;
    let pattern = $input.pattern || $input.dataset.pattern;

    if (pattern && $input.value !== "") {
      let regex = new RegExp(pattern);
      return !regex.exec($input.value)
        ? document.getElementById($input.classList).classList.add("is-active")
        : document
            .getElementById($input.classList)
            .classList.remove("is-active");
    }

    if (!pattern) {
      return $input.value === ""
        ? document.getElementById($input.classList).classList.add("is-active")
        : document
            .getElementById($input.classList)
            .classList.remove("is-active");
    }
  }
});

document.addEventListener("submit", (e) => {
  const $response = document.querySelector(".contact-form-response");
  const $loader = document.querySelector(".lds-ring");

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
