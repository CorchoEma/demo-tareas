 // function guardarTarea(){

//     var tareaInput = document.getElementById("input-tarea")

//     var listado = document.getElementById("listado-tareas")

//     listado.innerHTML += `<li>${tareaInput.value}</li>`

//     tareaInput.value = ""

// }//ctrl + k + c

var listadoTareas = [];

document.addEventListener("submit", function(event){

    event.preventDefault();
    var tarea = event.target[0].value

    if(tarea == ""){
        return alert("Por favor completar el campo tarea")
    }

    listadoTareas.push(tarea)

    console.log(listadoTareas)

    event.target[0].value = ""
    addTareaHtml()
})
function addTareaHtml(){
    // for (let index = 0; index < listadoTareas.length; index++) {
    //     console.log(listadoTareas[index]);
        
    // }

    // listadoTareas.forEach(function(e){
    //     console.log(e)
    // })

    var listadoHTML = document.getElementById("listado-tareas")

    // listadoTareas.map(function(t){
    //     listadoHTML.innerHTML += `<li>${t}</li>`
    // })
    
    const ultimaTarea = listadoTareas[listadoTareas.length - 1]
    listadoHTML.innerHTML += `<li>${ultimaTarea}</li>`
    
}