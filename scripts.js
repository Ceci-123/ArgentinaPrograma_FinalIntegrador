const nombre = document.getElementById("nombre");
const contacto = document.getElementById("contacto");
const manifiesto = document.getElementById("manifiesto");
const estudios = document.getElementById("estudios");
const experiencia = document.getElementById("experiencia");

window.addEventListener("click", (e) => {
  let emisor = e.path[0];
  let punteroContenido;
  let punteroTitulitos;
  switch (emisor) {
    case nombre:
      punteroContenido = document.getElementsByClassName("contenidos")[0];
      punteroTitulitos = document.getElementsByClassName("titulitos")[0];
      console.log(punteroContenido);
      console.log(punteroTitulitos);
      punteroTitulitos.setAttribute("display", "none");
      punteroContenido.setAttribute("display", "block");

      break;
    case contacto:
      punteroContenido = document.getElementsByClassName("contenidos")[1];
      punteroTitulitos = document.getElementsByClassName("titulitos")[1];
      console.log(punteroContenido);
      break;
    case manifiesto:
      punteroContenido = document.getElementsByClassName("contenidos")[2];
      punteroTitulitos = document.getElementsByClassName("titulitos")[2];
      console.log(punteroContenido);
      break;
    case estudios:
      punteroContenido = document.getElementsByClassName("contenidos")[3];
      punteroTitulitos = document.getElementsByClassName("titulitos")[3];
      console.log(punteroContenido);
      break;
    case experiencia:
      punteroContenido = document.getElementsByClassName("contenidos")[4];
      punteroTitulitos = document.getElementsByClassName("titulitos")[4];
      console.log(punteroContenido);
      break;
    default:
      alert("otra opcion");
      break;
  }
});
