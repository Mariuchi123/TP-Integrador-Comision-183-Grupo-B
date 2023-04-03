const nextBtn = document.querySelector("#boton-presupuesto");
// const backBtn = document.querySelector("#back-btn");
const step1 = document.querySelector("#formularioPresupuesto");

const step2 = document.querySelector("#step-2");

const summary = document.querySelector("#summary");

//agregar evento onclick al botón siguiente
nextBtn.addEventListener("click", function (evento) {
  // recopilar datos del primer paso
  evento.preventDefault();
  let name = document.querySelector("#nombre").value;
  let email = document.querySelector("#email").value;

  // **** Torta ****

  let torta = document.querySelector("#torta").checked;

  if (torta) {
    torta = "Si";
  } else {
    torta = "No";
  }
  let porcionesTorta = document.querySelector("#select-porciones-torta").value;

  let pisos = "";
  let pisosUno = document.querySelector("#pisos-uno").checked;
  let pisosdos = document.querySelector("#pisos-dos").checked;
  let pisostres = document.querySelector("#pisos-tres").checked;
  pisosUno
    ? (pisos = 1)
    : pisosdos
    ? (pisos = 2)
    : pisostres
    ? (pisos = 3)
    : (pisos = "");

  // **** Postre ****

  let postre = document.querySelector("#postre").checked;

  if (postre) {
    postre = "Si";
  } else {
    postre = "No";
  }
  let porcionesPostre = document.querySelector(
    "#select-porciones-postre"
  ).value;

  // **** Cajitas ****

  let cajitas = document.querySelector("#cajitasChocolatosas").checked;

  if (cajitas) {
    cajitas = "Si";
  } else {
    cajitas = "No";
  }
  let cajitasChocolatosasCantidad = document.querySelector(
    "#cajitasChocolatosasCantidad"
  ).value;

  // **** Coockies****

  let cookies = document.querySelector("#cookiess").checked;

  if (cookies) {
    cookies = "Si";
  } else {
    cookies = "No";
  }
  let cookiesCantidad = document.querySelector("#cookiesCantidad").value;

  // **** Icecakes  y cupcakes***

  let iceCakesCupcakes = document.querySelector("#iceCakesCupcakes").checked;

  if (iceCakesCupcakes) {
    iceCakesCupcakes = "Si";
  } else {
    iceCakesCupcakes = "No";
  }
  let iceCakesCupcakesCantidad = document.querySelector(
    "#iceCakesCupcakesCantidad"
  ).value;

  // **** Mesa Dulce ****

  let mesaDulce = document.querySelector("#mesaDulce").checked;

  if (mesaDulce) {
    mesaDulce = "Si";
  } else {
    mesaDulce = "No";
  }
  let mesaDulceComensales = document.querySelector(
    "#mesaDulceComensales"
  ).value;

  // **** Mensaje ****

  let mensaje = document.querySelector("#mensaje").value;

  // mostrar resumen en el segundo paso
  summary.innerHTML = `Nombre: ${name}
  <br>
  Email: ${email}
  <br>
  Torta: ${torta}, Porciones: ${porcionesTorta}, Pisos:${pisos}
  <br>
  Postre: ${postre}, Porciones: ${porcionesPostre}
  <br>
  Cajtas Chocolatosas: ${cajitas}, Cantidad: ${cajitasChocolatosasCantidad}
  <br>
  Cookies: ${cookies}, Cantidad: ${cookiesCantidad}
  <br>
 Ice cakes y Cupcakes: ${iceCakesCupcakes}, Cantidad: ${iceCakesCupcakesCantidad}
 <br>
 Mesa dulce: ${mesaDulce}, Comensales: ${mesaDulceComensales}
 <br>
 Mensaje: ${mensaje}
  `;

  // ocultar el primer paso y mostrar el segundo paso
  step1.style.display = "none";
  step2.style.display = "block";
});
