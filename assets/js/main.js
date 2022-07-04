// }//ctrl + k + c, {}, [], @, &, #, ``, '',  $
var listadoTareas = [];
leerTareasLocalStorage()
listadoTareas.map(t => addTareaHtml(t))

document.addEventListener("submit", function(event){ 
    event.preventDefault();
    var tarea = event.target[0].value
    if(tarea == ""){ //Comprobamos si esta vacio o no 
        return alert("Por favor completar el campo tarea") // return Evita que se guarde algo vacio
    }
    escribirTareaLocalStorage(tarea)
    event.target[0].value = "" //Limpia en input
})

function addTareaHtml(tarea){ //agrega el listado de tareas al HTML.
    var listadoHTML = document.getElementById("listado-tareas")
    listadoHTML.innerHTML += `<li class="list-group-item">${tarea}</li>`
}

function leerTareasLocalStorage(){
    var listadoTareasLS = JSON.parse(localStorage.getItem('tareas'))

    if (listadoTareasLS?.length > 0) {
        this.listadoTareas = listadoTareasLS
        console.log(`Se cargaron ${listadoTareasLS.length} tareas desde el localStorage`)
        $.notify(`se cargaron ${listadoTareasLS.length} tareas desde el localStorage`,"success");
    } else {
        $.notify(`no se encontraron tares en el localStorage`,"info");
        console.log("No se encontraro tareas en el localStorage")
    }



}
function escribirTareaLocalStorage(tarea) {
    var listadoTareasLS = JSON.parse(localStorage.getItem('tareas'))
    if (!listadoTareasLS) {
        localStorage.setItem('tareas',JSON.stringify([tarea]))
        leerTareasLocalStorage()
        addTareaHtml(tarea)
        $.notify(`Tarea cargada`,"success");
        return console.log("Tarea cargada")
    }
    listadoTareasLS.push(tarea)
    localStorage.setItem('tareas',JSON.stringify(listadoTareasLS))
    leerTareasLocalStorage()
    addTareaHtml(tarea)
    $.notify(`Tarea cargada`,"success");
    console.log("Tarea cargada")
}