const d = document;

export default function diseñoAdaptable(video, map) {
  let mqMax600 = window.matchMedia("(min-width: 600px)");

  const validar = (e) => {
    if (e.matches) {
      // video
      d.querySelector(
        video
      ).innerHTML = `<iframe width="400" height="200" src="https://www.youtube.com/embed/MNonFGGC8tI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

      // map
      d.querySelector(
        map
      ).innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1576.8535773720143!2d-57.45388688139798!3d-37.773464227101236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584cd83a80e383d%3A0x9a20e89fb69f236d!2sPlaza%20Mar%20De%20Cobo!5e0!3m2!1ses-419!2sar!4v1647470494669!5m2!1ses-419!2sar" width="500" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;
    } else {
      d.querySelector(
        video
      ).innerHTML = `<a rel="noopener" target="_blank" href="https://youtu.be/MNonFGGC8tI">Ver Video</a>`;
      d.querySelector(map).innerHTML = `<a target="_blank" rel="noopener"
      href="https://goo.gl/maps/BKEpApztQ6rbzH759">
      Ver Mapa
  </a>`;
    }
  };
  mqMax600.addListener(validar);
  validar(mqMax600);
}
