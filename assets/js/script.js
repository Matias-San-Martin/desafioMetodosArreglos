const inputTareas = document.querySelector("#inputTareas")
const btnIngresoTarea = document.querySelector("#btnIngresoTarea")
const agregarDatosTabla = document.querySelector("#agregarDatosTabla")
const totalTareas = document.querySelector("#totalTareas")
const tareasRealizadas = document.querySelector("#tareasRealizadas")

const tareas = []

function renderTareas(){
    agregarDatosTabla.innerHTML = "";
    for(let tarea of tareas) {
        const template = `
        <tr>
            <td>${tarea.id}</td>
            <td>${tarea.nombre}</td>
            <td><input type="checkbox" ${tarea.checkbox ? 'checked' : ''}></td>
            <td>${tarea.estado ? 'Realizada' : 'Pendiente'}</td>
        </tr>
        `;// falta agregar el boton elminar en vez de que aparezca pendiente
        agregarDatosTabla.innerHTML += template;
    }
}

//function contadorTareasRealizadas() {}

btnIngresoTarea.addEventListener("click", () => {
    const nombreTarea = inputTareas.value
    tareas.push({id: Date.now(), nombre: nombreTarea, checkbox: false, estado: false})
    inputTareas.value = ""
    renderTareas()

    totalTareas.textContent = `Total tareas: ${tareas.length}`
    //tareasRealizadas.textContent = ``
    console.log(tareas)
})

