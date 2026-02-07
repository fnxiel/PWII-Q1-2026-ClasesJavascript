const {Persona} = require('./models/Persona')
 
let persona = new Persona(1, "Luke", "Skywalker", 24, "Tatooine")
let persona2 = new Persona(2, "Han", "Solo", 35)
let persona3 = new Persona(3, "Leia", "Organa", 24, "Tegucigalpa")
let persona4 = new Persona(4, "Darth", "Vader", 50, "Tatooine")
let persona5 = new Persona(5, "Conde", "Duku", 80)
let persona6 = new Persona(6, "Booba", "Fett", 40)

let personas = [persona, persona2, persona3, persona4, persona5]

console.log(personas)

//CRUD

//Create (Crear)
personas.push(persona6)


//Read (Leer)

//Select * from Personas
console.log(personas)

//Select * top 1 from personas
console.log(personas[0])

//Select id, nombre from Personas

//for
console.log("Ciclo for")

for (let index = 0; index < personas.length; index++) {
    console.log(personas[index].id, personas[index].nombre)
}

//Funciones de bloque
function imprimirInformacionBasica(ppersona){
    console.log(ppersona.id, ppersona.nombre)
}

console.log("Usando foreach con funcion de bloque")
personas.forEach(imprimirInformacionBasica)

//Funciones de flecha
const imprimirInformacionBasicaFF = (ppersona) => {
    console.log(ppersona.id, ppersona.nombre)
}
console.log("Usando foreach con funcion de flecha")
personas.forEach(imprimirInformacionBasicaFF)

console.log("Usando foreach con funcion de flecha resumida")
const imprimirInformacionBasicaFFResumen = (ppersona) => console.log(ppersona.id, ppersona.nombre)
personas.forEach(imprimirInformacionBasicaFFResumen)

console.log("Usando foreach con funcion de flecha resumida anonima")
personas.forEach((ppersona) => console.log(ppersona.id, ppersona.nombre))

console.log("Usando foreach con funcion de bloque anonima")
personas.forEach(function (ppersona){ console.log(ppersona.id, ppersona.nombre)})

console.log("Foreach con indice")
personas.forEach((ppersona, i) => console.log(`indice: ${i}, Id: ${ppersona.id}, Nombre: ${ppersona.nombre}`))


console.log("Usando map")
personas.map((ppersona, i) => console.log(`indice: ${i}, Id: ${ppersona.id}, Nombre: ${ppersona.nombre}`))


console.log("Salida de foreach contra map")
const salidarForEach = personas.forEach((ppersona) => ppersona)
const salidaMap = personas.map((ppersona) => {
    return {
        id: ppersona.id,
        nombre: ppersona.nombre
    }
})

console.log("Salida foreach")
console.log(salidarForEach)
console.log("Salida map")
console.log(salidaMap)


//Select * from Personas where id = 4

console.log("Buscando la persona con un id utilizando find")
const personaEncontrada = personas.find(ppersona => ppersona.id === 4)
if(personaEncontrada){
    console.log(personaEncontrada)
}else{
    console.log("No se encontró la persona con el id 4")
}

console.log("Buscando las personas por edad utilizando filter")
const personaEncontradaFilter = personas.filter(ppersona => ppersona.edad === 24)
if(personaEncontradaFilter){
    console.log(personaEncontradaFilter)
}else{
    console.log("No se encontraron personas con la edad de 24 años")
}

//Update (Actualizar)

const personaModificar = personas.find(ppersona => ppersona.id === 2)
personaModificar.apellido = "Programacion Web II"
console.log("Registro modificado")
console.log(personaModificar)
console.log("Arreglo de personas")
console.log(personas)

//Delete (Eliminar)

//Delete from Personas where id = 5
//personas.pop() // borra el ultimo
personas = personas.filter(ppersona => ppersona.id !== 5)
console.log(personas)
