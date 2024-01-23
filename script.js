historial = [];

var pantalla = document.querySelector("#pantalla");

function addValue(valor) {
  let pantalla = document.getElementById("pantalla");
  if (pantalla.value.length > 0) {
    if (
      esSigno(pantalla.value.charAt(pantalla.value.length - 1)) &&
      esSigno(valor)
    ) {
      return;
    }
  }
  pantalla.value += valor;
}

function esSigno(caracter) {
  return (
    caracter === "*" || caracter === "/" || caracter === "+" || caracter === "-"
  );
}

function clearAll() {
  let pantalla = document.getElementById("pantalla");
  pantalla.value = "";
}

function result() {
  let pantalla = document.getElementById("pantalla");
if (pantalla.value.length > 0) {
  let pantalla = document.getElementById("pantalla");
    let resultado = eval(pantalla.value);
    pantalla.value = resultado;

    historial.push(resultado);
    addToHistorial(resultado);
}
}

function addToHistorial(resultado) {
  let lista = document.getElementById("lista");
  let listItem = document.createElement("li");
  listItem.textContent = `${resultado}`;
  lista.appendChild(listItem);
}
