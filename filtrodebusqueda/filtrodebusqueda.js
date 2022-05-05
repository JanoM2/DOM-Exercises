window.addEventListener("DOMContentLoaded", () => {
  let arr = ["animals", "arch", "nature", "people", "tech", "any"];

  let $div = document.querySelector(".imagenes");

  arr.forEach((el) => {
    // createElement y setAttribute
    let $figure = document.createElement("figure");
    $figure.classList = "figure " + el;
    let $img = document.createElement("img");
    let $figCaption = document.createElement("figcaption");
    $img.setAttribute("alt", el);
    $img.setAttribute("src", `https://placeimg.com/640/480/${el}`);

    // appendChild y textContent
    $figure.appendChild($img);
    $figure.appendChild($figCaption);
    $div.appendChild($figure);
    $figCaption.textContent = el;
  });
});

let $input = document.querySelector(".busqueda");

$input.addEventListener("keyup", (e) => {
  let figure = document.querySelectorAll(".figure");

  figure.forEach((el) =>
    el.textContent.toLowerCase().includes(e.target.value)
      ? (el.style.display = "")
      : (el.style.display = "none")
  );
});
