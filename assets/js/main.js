function guardarTarea(){
    var tareaInput = document.getElementById("input-tarea")
    var listado = document.getElementById("Listado-tareas")

    listado.innerHTML += `<li>${tareaInput.value}</li>`
    tareaInput.value = "" 
}