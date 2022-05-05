// Pikachu que se mueve adentro de un Canvas

// Seleccionando Canvas y dandole contexto 2d

let canvas = document.getElementById("escenario");
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

document.addEventListener("click", (e) => {
  if (e.target.matches("#escenario")) {
    document.body.style.overflow = "hidden"; // detener scroll
    document.addEventListener("keydown", moverPika, true); // evento que mueve a pikachu
  }
});

document.addEventListener("click", (e) => {
  if (!e.target.matches("#escenario")) {
    document.body.style.overflow = "visible"; // habilitar scroll
    document.removeEventListener("keydown", moverPika, true); // evento que detiene el movimiento de pikachu
  }
});

// Atajos del Teclado

document.addEventListener("keydown", (e) => {
  if (e.altKey && e.keyCode === 65) alert("Esto es una Alerta");
});

document.addEventListener("keydown", (e) => {
  if (e.altKey && e.keyCode === 67) confirm("Esto es una Confirmacion");
});

document.addEventListener("keydown", (e) => {
  if (e.altKey && e.keyCode === 80) prompt("Esto es un Prompt");
});
