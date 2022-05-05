const $select = document.querySelector("#selectVoice");
const $textArea = document.querySelector("#textAreaVoice");
const $btnvoice = document.querySelector(".btnVoice");
let message = new SpeechSynthesisUtterance();
let voices = [];

document.addEventListener("DOMContentLoaded", (e) => {
  //
  window.speechSynthesis.addEventListener("voiceschanged", (e) => {
    //
    voices = window.speechSynthesis.getVoices();

    voices.forEach((voice) => {
      const $option = document.createElement("option");
      $option.value = voice.name;
      $option.textContent = `${voice.name} - ${voice.lang}`;
      $select.appendChild($option);
    });
  });

  document.addEventListener("change", (e) => {
    if (e.target === $select) {
      message.voice = voices.find((voice) => {
        return voice.name === e.target.value;
      });
    }
  });

  document.addEventListener("click", (e) => {
    if (e.target === $btnvoice) {
      message.text = $textArea.value;
      window.speechSynthesis.speak(message);
    }
  });
});
