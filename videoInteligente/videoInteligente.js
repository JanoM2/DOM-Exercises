document.addEventListener("DOMContentLoaded", () => {
  const $videos = document.querySelectorAll("video[data-smart-video]");

  const cl = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.play();
      } else {
        entry.target.pause();
      }
      window.addEventListener("visibilitychange", (el) => {
        $videos.visibilityState === "visible"
          ? entry.target.play()
          : entry.target.pause();
        // console.log(document.visibilityState);
      });
    });
  };

  const obv = new IntersectionObserver(cl, {
    threshold: 0.5,
  });

  $videos.forEach((el) => obv.observe(el));

  const $videoInt2 = document.querySelector("#videoInteligente2");

  $videoInt2.addEventListener("mouseover", () => {
    $videoInt2.play();
    $videoInt2.addEventListener("mouseout", () => {
      $videoInt2.pause();
      $videoInt2.style.transition = "0.5s";
    });
  });
});
