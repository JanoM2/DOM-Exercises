const d = document;
const w = window;

export default function voiceReader(select, textArea, btnVoice) {
  const $select = d.querySelector(select);
  const $textArea = d.querySelector(textArea);
  const $btnvoice = d.querySelector(btnVoice);
  let message = new SpeechSynthesisUtterance();
  let voices = [];

  //
  w.speechSynthesis.addEventListener("voiceschanged", (e) => {
    //
    voices = w.speechSynthesis.getVoices();

    voices.forEach((voice) => {
      const $option = d.createElement("option");
      $option.value = voice.name;
      $option.textContent = `${voice.name} - ${voice.lang}`;
      $select.appendChild($option);
    });
  });

  d.addEventListener("change", (e) => {
    if (e.target === $select) {
      message.voice = voices.find((voice) => {
        return voice.name === e.target.value;
      });
    }
  });

  d.addEventListener("click", (e) => {
    if (e.target === $btnvoice) {
      message.text = $textArea.value;
      w.speechSynthesis.speak(message);
    }
  });
}
