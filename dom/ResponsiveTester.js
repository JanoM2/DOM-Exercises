const d = document;
const w = window;

export default function responviseTester(
  formTester,
  url,
  width,
  height,
  btnOpen,
  btnClose
) {
  let form = d.querySelector(formTester);
  d.addEventListener("click", (e) => {
    if (e.target.matches(btnOpen)) {
      let $url = form.querySelector(url),
        $width = form.querySelector(width),
        $height = form.querySelector(height);

      let ventana;
      ventana = w.open(
        $url.value,
        $url.value,
        `innerWidth=${$width.value}, innerHeight=${$height.value}`
      );

      d.addEventListener("click", (e) => {
        if (e.target.matches(btnClose)) {
          ventana.close();
        }
      });
    }
  });
}
