const nombre = document.getElementById("nombre");
const contacto = document.getElementById("contacto");
const manifiesto = document.getElementById("manifiesto");
const estudios = document.getElementById("estudios");
const experiencia = document.getElementById("experiencia");

const miNombre = "Morenita Lopez";

nombre.addEventListener("click", () => {
  nombre.innerHTML = miNombre;
});
contacto.addEventListener("click", () => {
  contacto.innerHTML = "chu chu";
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
