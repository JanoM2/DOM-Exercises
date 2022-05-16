const d = document;
const w = window;

export default function responviseTester(
  formTester,
  url,
  width,
  height,
  btnClose
) {
  let form = d.querySelector(formTester);
  form.addEventListener("submit", () => {
    let $url = form.querySelector(url),
      $width = form.querySelector(width),
      $height = form.querySelector(height);

    let ventana;
    ventana = w.open(
      $url.value,
      $url.value,
      `innerWidth=${$width.value}, innerHeight=${$height.value}`
    );

    console.log($url, $width, $height);

    d.addEventListener("click", (e) => {
      if (e.target.matches(btnClose)) {
        // e.preventDefault();
        ventana.close();
      }
    });
  });
}
