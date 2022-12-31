const nombre = document.getElementById("nombre");
const contacto = document.getElementById("contacto");
const manifiesto = document.getElementById("manifiesto");
const estudios = document.getElementById("estudios");
const experiencia = document.getElementById("experiencia");

const miNombre = "Morenita Lopez";
const datosContacto = "celular 12345678";
const miManifiesto = "me gusta el trabajo en equipo";
const misEstudios = "termine jardin";
const miExperiencia = "trabaje en un kiosco";

window.addEventListener("click", (e) => {
  emisor = e.path[0];

  switch (emisor) {
    case nombre:
      alert(miNombre);
      break;
    case contacto:
      alert(datosContacto);
      break;
    case manifiesto:
      alert(miManifiesto);
      break;
    case estudios:
      alert(misEstudios);
      break;
    case experiencia:
      alert(miExperiencia);
      break;
    default:
      alert("algo malio sal");
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
