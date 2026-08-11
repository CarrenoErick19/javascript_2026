const tarea = document.getElementById("tarea"); //obtenemos el valor de tarea
const lista = document.getElementById("listaTareas"); //obtenemos la lista "ul"
const bt1 = document.getElementById("bt1"); //obtenemos el boton
const idTarea = document.getElementById("idTarea");
function llenarFormulario() {
  let nuevaTarea = document.createElement('li'); //definimos nuevatarea que sera igual a un nuevo valor en la lista
  nuevaTarea.textContent = tarea.value;  //asignamos a nueva tarea el valor llenado desde el input
  idTarea.textContent = "001";
  let cadenaIf = tarea.value;
  if (cadenaIf == "") {
    alert("Por favor, ingrese un valor que no sea un espacio en blanco");
  }else{
    lista.appendChild(nuevaTarea); //se añade dicha nueva tarea al final de la lista
    let botonEliminar = document.createElement('button');
  }
}
function clearInput() {
  tarea.value = "";
}
bt1.addEventListener("click", llenarFormulario); // al hacer clic se ejecuta la funcion para añadir una tarea
bt1.addEventListener("click", clearInput)
