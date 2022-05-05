const geo = (posicion) => {
  let cord = posicion.coords;

  document.querySelector("#geolocalizacion").innerHTML = `
  <p><b>Latitud: </b>${cord.latitude}</p>
  <p><b>Longitud: </b>${cord.longitude}</p>
  <p><b>Precision: </b>${Math.round(cord.accuracy)} Metros</p>
  <a target="_blank" href="https://www.google.com.ar/maps/place/37%C2%B045'59.8%22S+57%C2%B027'07.3%22W/@${
    cord.latitude
  },${
    cord.longitude
  },17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x30c6434f73a2de88!8m2!3d-37.7666219!4d-57.4520202">Ver en Google Maps</a>
  `;
};

const error = (err) => {
  console.error("ERROR(" + err.code + "): " + err.message);
  document.querySelector("#geolocalizacion").innerHTML = `
  <p><b>Error:</b> ${err.code} ${err.message}</p>`;
};

Options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

navigator.geolocation.getCurrentPosition(geo, error, Options);
