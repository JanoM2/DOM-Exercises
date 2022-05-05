navigator.mediaDevices
  .getUserMedia({ video: true, audio: false })
  .then(function (stream) {
    let $video = document.getElementById("cam");
    $video.classList = "enabled";
    $video.srcObject = stream;
    $video.play();
  })
  .catch(function (err) {
    console.warn(err);
    let $section = document.querySelector("#section7");
    let $div = document.createElement("div");
    $div.innerHTML = `<b>${err}</b>`;
    $section.appendChild($div);
  });
