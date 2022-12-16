
const url = "http://localhost:5500/API/jugadores"
// const contenedor = document.querySelector('tbody') 
// let resultados = ''

const modalJugador = new bootstrap.Modal(document.getElementById('modalJugador'))
const formJugadores = document.querySelector("form");
const nombre = document.getElementById("nombre")
const posicion = document.getElementById("posicion")
const seleccion = document.getElementById("seleccion")
let opcion = ''

btnCrear.addEventListener('click', ()=>{
    nombre.value = ''
    posicion.value = ''
    seleccion.value = ''
    modalJugador.show()
    opcion = "crear"
})

// Funcion para mostar los jugadores 
// const mostrar = (jugadores) => {
//     jugadores.forEach(jugador => {
//         resultados += `
//                         <tr>
//                             <td>${jugador.Idjugador}</td>
//                             <td>${jugador.nombre}</td>
//                             <td>${jugador.posicion}</td>
//                             <td>${jugador.idseleccion}</td>
                            // <td class ="text-center" ><a class="btnEditar btn btn-primary">Editar</a><a class="btnBorrar btn btn-danger">Borrar</a></td>
//                         </tr>
//                 `   
//     contenedor.innerHTML = resultados
//     });
// }

// // Procedimiento para mostrar los jugadores 
// fetch(url)
//     .then(response => response.json)
//     .then(data => mostrar(data))
//     .catch(error => console.log(error))



fetch(url)
    .then(response => response.json())
    .then(data => mostrarData(data))
    .catch(error => console.log(error))

const mostrarData = (data) => {
    console.log(data)
    let body = ''
    for (let i = 0; i<data.length; i++){
        body += `<tr><td>${data[i].Idjugador}</td><td>${data[i].nombre}</td><td>${data[i].posicion}</td><td>${data[i].idseleccion}</td><td class ="text-center" ><a class="btnEditar btn btn-primary">Editar</a><a class="btnBorrar btn btn-danger">Borrar</a></td></tr>`
    }
    document.getElementById('data').innerHTML = body;
}
