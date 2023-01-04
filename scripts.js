//primera version - el codigo funciona y no repite codigo
// pero no toma correctamente el click

const nombre = document.getElementById("nombre");
const contacto = document.getElementById("contacto");
const manifiesto = document.getElementById("manifiesto");
const estudios = document.getElementById("estudios");
const experiencia = document.getElementById("experiencia");

window.addEventListener("click", (e) => {
  let emisor = e.path[0];
  console.log(emisor);
  let punteroContenido;
  let punteroTitulitos;
  switch (emisor) {
    case nombre:
      punteroContenido = document.getElementsByClassName("contenidos")[0];
      punteroTitulitos = document.getElementsByClassName("titulitos")[0];
      if (punteroTitulitos.style.display === "block") {
        punteroTitulitos.style.display = "none";
        punteroContenido.style.display = "block";
      } else {
        punteroTitulitos.style.display = "block";
        punteroContenido.style.display = "none";
      }
      break;
    case contacto:
      punteroContenido = document.getElementsByClassName("contenidos")[1];
      punteroTitulitos = document.getElementsByClassName("titulitos")[1];
      if (punteroTitulitos.style.display === "block") {
        punteroTitulitos.style.display = "none";
        punteroContenido.style.display = "block";
      } else {
        punteroTitulitos.style.display = "block";
        punteroContenido.style.display = "none";
      }
      break;
    case manifiesto:
      punteroContenido = document.getElementsByClassName("contenidos")[2];
      punteroTitulitos = document.getElementsByClassName("titulitos")[2];
      if (punteroTitulitos.style.display === "block") {
        punteroTitulitos.style.display = "none";
        punteroContenido.style.display = "block";
      } else {
        punteroTitulitos.style.display = "block";
        punteroContenido.style.display = "none";
      }
      break;
    case estudios:
      punteroContenido = document.getElementsByClassName("contenidos")[3];
      punteroTitulitos = document.getElementsByClassName("titulitos")[3];
      if (punteroTitulitos.style.display === "block") {
        punteroTitulitos.style.display = "none";
        punteroContenido.style.display = "block";
      } else {
        punteroTitulitos.style.display = "block";
        punteroContenido.style.display = "none";
      }
      break;
    case experiencia:
      punteroContenido = document.getElementsByClassName("contenidos")[4];
      punteroTitulitos = document.getElementsByClassName("titulitos")[4];
      if (punteroTitulitos.style.display === "block") {
        punteroTitulitos.style.display = "none";
        punteroContenido.style.display = "block";
      } else {
        punteroTitulitos.style.display = "block";
        punteroContenido.style.display = "none";
      }
      break;
  }
});
