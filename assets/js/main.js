function guardarTarea(){

    var tareaInput = document.getElementById("input-tarea")

    var listado = document.getElementById("listado-tareas")

    listado.innerHTML += `<li>${tareaInput.value}</li>`

    tareaInput.value = "" 
    
}