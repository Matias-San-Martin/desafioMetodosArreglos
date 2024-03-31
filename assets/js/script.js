const inputTareas = document.querySelector("#inputTareas")
const btnIngresoTarea = document.querySelector("#btnIngresoTarea")
const agregarDatosTabla = document.querySelector("#agregarDatosTabla")
const totalTareas = document.querySelector("#totalTareas")
const tareasRealizadas = document.querySelector("#tareasRealizadas")

const tareas = [
    {id: 1711861543454, nombre: "Pasear a Boby" },
    {id: 1711861543455, nombre: "Pasear a Loly" },
    {id: 1711861543456, nombre: "Pasear a Yogy" },
]

function findTareasCompletadas(id) {
    const tarea = tareas.find(t => t.id === id)
    tarea.estado = !tarea.estado;
    renderTareas()
    const tareasCompetadas = tareas.filter(t => t.estado).length
    tareasRealizadas.textContent = `Realizadas: ${tareasCompetadas}`
}

function deleteTareas(id) {
    const index = tareas.findIndex(t=> t.id == id)
    tareas.splice(index, 1)
    renderTareas()
    totalTareas.textContent = `Total tareas: ${tareas.length}`
    if(tareas.length === 0) {
        tareasRealizadas.textContent = ""
    }
}

function renderTareas() {
    agregarDatosTabla.innerHTML = "";
    for(let tarea of tareas) {
        const template = `
        <tr>
            <td>${tarea.id}</td>
            <td>${tarea.nombre}</td>
            <td><input onclick="findTareasCompletadas(${tarea.id})" type="checkbox" ${tarea.estado ? 'checked' : ''}></td>
            <td><button onclick="deleteTareas(${tarea.id})"><i class="fa-regular fa-trash-can"></i></button></td>
        </tr>
        `;  
        agregarDatosTabla.innerHTML += template;
    }
}

btnIngresoTarea.addEventListener("click", () => {
    const nombreTarea = inputTareas.value
    tareas.push({id: Date.now(), nombre: nombreTarea, estado: false, eliminar: false})
    inputTareas.value = ""
    renderTareas()

    totalTareas.textContent = `Total tareas: ${tareas.length}`
    console.log(tareas)
})

