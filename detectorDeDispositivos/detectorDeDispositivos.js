const detectar = () => {
  let $div = document.querySelector(".dispositivo");
  let n = navigator,
    ua = navigator.userAgent;

  esMovil = {
    android: () => ua.match(/android/i),
    ios: () => ua.match(/iphone|ipad|ipod/i),
    windows: () => ua.match(/windows phone/i),
    any: function () {
      return this.android() || this.ios() || this.windows();
    },
  };

  esDesktop = {
    linux: () => ua.match(/linux/i),
    mac: () => ua.match(/mac os/i),
    windows: () => ua.match(/windows nt/i),
    any: function () {
      return this.linux() || this.mac() || this.windows();
    },
  };

  navegador = {
    chrome: () => ua.match(/chrome/i),
    safari: () => ua.match(/safari/i),
    edge: () => ua.match(/edge/i),
    firefox: () => ua.match(/fierfox/i),
    ie: () => ua.match(/msie|iemobile/i),
    opera: () => ua.match(/opera|opera mini/i),
    any: function () {
      return (
        this.chrome() ||
        this.safari() ||
        this.edge() ||
        this.firefox() ||
        this.ie() ||
        this.opera()
      );
    },
  };

  $div.innerHTML = `<ul>
  <li><b>User Agent:</b> ${ua}</li>
  <li><b>Platagorma: </b>${esMovil.any() ? esMovil.any() : esDesktop.any()}</li>
  <li><b>Navegador:</b> ${navegador.any()}</li>
  </ul>`;
};

document.addEventListener("load", detectar());
