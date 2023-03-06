import { data_todo_list } from "./data.js";
import { item_component } from "./item_component.js";

//referencia con el don 
let todo_list = document.querySelector(".todo_list");


// Funcion pra imprimir la lista de tareas 
let caja_de_todos = document.querySelector(".todo_list")

function imprimir_todos (){
    data_todo_list.forEach((element, indice) => {

        let todo = document.createElement("div")
        todo.innerHTML = item_component(indice);

        caja_de_todos.appendChild(todo)

    });
}

imprimir_todos();

//crear una nueva tarea 

function nueva_tarea (){
    data_todo_list.push("Nueva tarea");
    caja_de_todos.innerHTML = " ";
    imprimir_todos();
}

let boton = document.querySelector("#btn-todo");
boton.addEventListener("click", nueva_tarea)

