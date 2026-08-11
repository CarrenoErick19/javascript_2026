const tarea = document.getElementById("tarea"); //obtenemos el valor de tarea
const bt1 = document.getElementById("bt1"); //obtenemos el boton
const accion = document.getElementById("accion");
const idTarea = document.getElementById("idTarea");
const Tareas = document.getElementById("tablaTareas")
function llenarFormulario() {
  let nuevaFila = Tareas.insertRow(1);
  let nuevoid = nuevaFila.insertCell(0)
  let nuevaTarea = nuevaFila.insertCell(1)
  let accion1 = nuevaFila.insertCell(2)
  let accion2 = nuevaFila.insertCell(3)
  nuevaTarea.textContent = tarea.value;
  nuevoid.textContent = "001";
  let botonEliminar = document.createElement('button');
  accion1.appendChild(botonEliminar);
  let checkTarea = document.createElement('input');
  checkTarea.type = "checkbox"; 
  accion2.appendChild(checkTarea); 
  let cadenaIf = tarea.value;
  if (cadenaIf == "") {
    alert("Por favor, ingrese un valor que no sea un espacio en blanco");
  }else{
    lista.appendChild(nuevaTarea); //se añade dicha nueva tarea al final de la lista
  }
}
function clearInput() {
  tarea.value = "";
}
bt1.addEventListener("click", llenarFormulario); // al hacer clic se ejecuta la funcion para añadir una tarea
bt1.addEventListener("click", clearInput)


//leer documentacion sobre: Node.textContent, Node.appendChild, Element.append
