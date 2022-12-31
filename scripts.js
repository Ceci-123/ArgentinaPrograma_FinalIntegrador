const nombre = document.getElementById("nombre");
const contacto = document.getElementById("contacto");
const manifiesto = document.getElementById("manifiesto");
const estudios = document.getElementById("estudios");
const experiencia = document.getElementById("experiencia");

window.addEventListener("click", (e) => {
  emisor = e.path[0];
  switch (emisor) {
    case nombre:
      const x = document.getElementsByClassName("contenidos")[0];
      console.log(x);
      x.removeAttribute("display");
      x.setAttribute("display", "block");

      break;
    case contacto:
      const y = document.getElementsByClassName("contenidos")[1];
      console.log(y);
      break;
    case manifiesto:
      const g = document.getElementsByClassName("contenidos")[2];
      console.log(g);
      break;
    case estudios:
      const h = document.getElementsByClassName("contenidos")[3];
      console.log(h);
      break;
    case experiencia:
      const m = document.getElementsByClassName("contenidos")[4];
      console.log(m);
      break;
    default:
      alert("mi foto");
      break;
  }
});

/* nombre.addEventListener("click", () => {
  nombre.innerHTML = miNombre;
}); */
/* contacto.addEventListener("click", () => {
  contacto.innerHTML = datosContacto;
});
manifiesto.addEventListener("click", () => {
  manifiesto.innerHTML = "chu chu";
});
estudios.addEventListener("click", () => {
  estudios.innerHTML = "chu chu";
});
experiencia.addEventListener("click", () => {
  experiencia.innerHTML = "chu chu";
});
 */
