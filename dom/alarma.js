const d = document;

export default function alarma(btnPlay, btnStop, audio) {
  d.addEventListener("click", (e) => {
    //
    if (e.target.matches(btnPlay)) {
      const musica = document.createElement("audio");
      musica.src = audio;
      musica.setAttribute("controls", "none");
      musica.setAttribute("preload", "auto");
      musica.play();

      d.querySelector(btnPlay).disabled = true;

      d.addEventListener("click", (e) => {
        //
        if (e.target.matches(btnStop)) {
          musica.currentTime = 0;
          musica.pause();
          d.querySelector(btnPlay).disabled = false;
        }
      });
    }
  });
}
