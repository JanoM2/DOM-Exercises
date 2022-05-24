const d = document;

export default function videoInteligente(video1, video2) {
  const $videoInt1 = d.querySelector(video1);

  const cl = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.play();
      } else {
        entry.target.pause();
      }
      window.addEventListener("visibilitychange", (el) => {
        $videoInt1.visibilityState === "visible"
          ? entry.target.play()
          : entry.target.pause();
      });
    });
  };

  const obv = new IntersectionObserver(cl, {
    threshold: 0.5,
  });

  (() => obv.observe($videoInt1))();

  const $videoInt2 = d.querySelector(video2);

  $videoInt2.addEventListener("mouseover", () => {
    $videoInt2.play();
    $videoInt2.addEventListener("mouseout", () => {
      $videoInt2.pause();
      $videoInt2.style.transition = "0.5s";
    });
  });
}
