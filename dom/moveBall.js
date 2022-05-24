const d = document;
let x = 0;
let y = 0;

export function moveBall(e, ball, stage) {
  const $ball = d.querySelector(ball);
  const $stage = d.querySelector(stage);
  const limitsBall = $ball.getBoundingClientRect();
  const limitsStage = $stage.getBoundingClientRect();

  switch (e.keyCode) {
    case 37:
      if (limitsBall.left > limitsStage.left) {
        e.preventDefault();
        x--;
      }
      break;
    case 38:
      if (limitsBall.top > limitsStage.top) {
        e.preventDefault();
        y--;
      }
      break;
    case 39:
      if (limitsBall.right < limitsStage.right) {
        e.preventDefault();
        x++;
      }
      break;
    case 40:
      if (limitsBall.bottom < limitsStage.bottom) {
        e.preventDefault();
        y++;
      }
    default:
      break;
  }
  $ball.style.transform = `translate(${x * 10}px,${y * 10}px)`;
}
