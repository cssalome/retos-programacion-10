// instanciar el funcion
//crear la funcion

const mostrarResultados = (e) => {
  e.preventDefault(e);
  //pasar los datos
  const data = new FormData(e.target);
  const resultados = Object.fromEntries(data.entries());
  resultados.complejos = data.getAll("complejo");
  console.table(resultados);
  alert(`Tu seleccion es ${JSON.stringify(resultados)}`);
};

function main() {
  const formulario = document.getElementById("formulario");
  formulario.addEventListener("submit", mostrarResultados);
}

main();
