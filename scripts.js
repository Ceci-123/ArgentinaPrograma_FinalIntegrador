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
  console.log(e.path[0]);
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
