// asi funciona pero repite codigo :(

const nombre = document.getElementById("nombre");
const contacto = document.getElementById("contacto");
const manifiesto = document.getElementById("manifiesto");
const estudios = document.getElementById("estudios");
const experiencia = document.getElementById("experiencia");

nombre.addEventListener("click", () => {
  let punteroTitulo = document.getElementById("titulo_nombre");
  let punteroContenido = document.getElementById("contenido_nombre");
  if (punteroTitulo.style.display === "block") {
    punteroTitulo.style.display = "none";
    punteroContenido.style.display = "block";
  } else {
    punteroTitulo.style.display = "block";
    punteroContenido.style.display = "none";
  }
});

contacto.addEventListener("click", () => {
  let punteroTitulo = document.getElementById("titulo_contacto");
  let punteroContenido = document.getElementById("contenido_contacto");
  if (punteroTitulo.style.display === "block") {
    punteroTitulo.style.display = "none";
    punteroContenido.style.display = "block";
  } else {
    punteroTitulo.style.display = "block";
    punteroContenido.style.display = "none";
  }
});

manifiesto.addEventListener("click", () => {
  let punteroTitulo = document.getElementById("titulo_manifiesto");
  let punteroContenido = document.getElementById("contenido_manifiesto");
  if (punteroTitulo.style.display === "block") {
    punteroTitulo.style.display = "none";
    punteroContenido.style.display = "block";
  } else {
    punteroTitulo.style.display = "block";
    punteroContenido.style.display = "none";
  }
});

estudios.addEventListener("click", () => {
  let punteroTitulo = document.getElementById("titulo_estudios");
  let punteroContenido = document.getElementById("contenido_estudios");
  if (punteroTitulo.style.display === "block") {
    punteroTitulo.style.display = "none";
    punteroContenido.style.display = "block";
  } else {
    punteroTitulo.style.display = "block";
    punteroContenido.style.display = "none";
  }
});

experiencia.addEventListener("click", () => {
  let punteroTitulo = document.getElementById("titulo_experiencia");
  let punteroContenido = document.getElementById("contenido_experiencia");
  if (punteroTitulo.style.display === "block") {
    punteroTitulo.style.display = "none";
    punteroContenido.style.display = "block";
  } else {
    punteroTitulo.style.display = "block";
    punteroContenido.style.display = "none";
  }
});
