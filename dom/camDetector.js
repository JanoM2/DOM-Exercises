const d = document;

export default function detectorDeCamara(cam) {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then(function (stream) {
      let $video = d.querySelector(cam);
      $video.classList = "enabled";
      $video.srcObject = stream;
      $video.play();
    })
    .catch(function (err) {
      console.warn(err);
      let $section = d.querySelector("#section7");
      let $div = d.createElement("div");
      $div.innerHTML = `<b>${err}</b>`;
      $section.appendChild($div);
    });
}
