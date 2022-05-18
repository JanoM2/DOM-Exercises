const d = document;

export default function canvas(papel) {
  // Seleccionando Canvas y dandole contexto 2d

  let canvas = d.getElementById(papel);
  let escenario = canvas.getContext("2d");

  // creando variables fondo y pikachu

  let fondo = new Image();
  fondo.src = "fondo.png";
  let pika = new Image();
  pika.src = "pikachu.png";

  // controladores de evento ("load", al cargar se ejecuta el code)

  fondo.addEventListener("load", () => {
    dibujar();
  });

  pika.addEventListener("load", () => {
    dibujar();
  });

  //posicion default de pikachu

  let xPika = 0;
  let yPika = 0;

  // dibujar el fondo y a pikachu

  const dibujar = () => {
    escenario.drawImage(fondo, 0, 0);
    escenario.drawImage(pika, xPika, yPika);
  };

  // funcion para mover a pikachu

  function moverPika(e) {
    let movimiento = 20;
    let teclas = {
      UP: 38,
      DOWN: 40,
      LEFT: 37,
      RIGHT: 39,
    };

    if (e.keyCode == teclas.UP) {
      yPika = yPika - movimiento;
      dibujar(xPika, yPika);
    } else if (e.keyCode == teclas.DOWN) {
      yPika = yPika + movimiento;
      dibujar(xPika, yPika);
    } else if (e.keyCode == teclas.RIGHT) {
      xPika = xPika + movimiento;
      dibujar(xPika, yPika);
    } else if (e.keyCode == teclas.LEFT) {
      xPika = xPika - movimiento;
      dibujar(xPika, yPika);
    }
  }

  // Bloquear el scroll y evitar que pikachu se mueva

  d.addEventListener("click", (e) => {
    if (e.target.matches("#escenario")) {
      d.body.style.overflow = "hidden"; // detener scroll
      d.addEventListener("keydown", moverPika, true); // evento que mueve a pikachu
    }
  });

  d.addEventListener("click", (e) => {
    if (!e.target.matches("#escenario")) {
      d.body.style.overflow = "visible"; // habilitar scroll
      d.removeEventListener("keydown", moverPika, true); // evento que detiene el movimiento de pikachu
    }
  });

  // Atajos del Teclado

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
