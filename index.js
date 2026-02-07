var colors = require('colors');
const {Persona} = require('./models/Persona')
const {Empleado} = require('./models/Empleado')
const {ListaAsistencia} = require('./models/ListaAsistencia')
const {RegistroAsistencia} = require('./models/RegistroAsistencia')
 
let persona = new Persona(1, "Luke", "Skywalker", 24, "Tatooine")
let persona2 = new Persona(2, "Han", "Solo", 35)
let persona3 = new Persona(3, "Leia", "Organa", 24, "Tegucigalpa")
let persona4 = new Persona(4, "Darth", "Vader", 50, "Tatooine")
let persona5 = new Persona(5, "Conde", "Duku", 80)
let persona6 = new Persona(6, "Booba", "Fett", 40)

let empleado = new Empleado(6, "Chewaka", "Wookie", 50, "Alcon milenario", 10000, "Docente")

let registro1 = new RegistroAsistencia(1, persona, true)
let registro2 = new RegistroAsistencia(2, persona2, false)
let registro3 = new RegistroAsistencia(3, persona3, false)
let registro4 = new RegistroAsistencia(4, persona4, true)
let registro5 = new RegistroAsistencia(5, persona5, true)

let listaAsistencia = new ListaAsistencia(1, "Programacion Web II")
listaAsistencia.registrarAsistencia(registro1)
listaAsistencia.registrarAsistencia(registro2)
listaAsistencia.registrarAsistencia(registro3)
listaAsistencia.registrarAsistencia(registro4)
listaAsistencia.registrarAsistencia(registro5)
listaAsistencia.mostrarAusentes()


// empleado.presentarse(persona.nombreCompleto)
// console.log(empleado)

// console.log(persona)

// persona.saludar("Alumnos")
// persona2.saludar(persona.nombre)

// console.log("--persona3--")
// persona3.decirInformacionPersonal()

// console.log("--persona--")
// persona.presentarse(persona5.nombre)
// persona.aniversario()
// persona.aniversario()
// persona.aniversario()

// console.log(persona.nombreCompleto)

// persona.nombre = "Darth"
// persona.apellido = "Vader"
// persona.direccion = "Estrella de la muerte"

// console.log(persona.nombreCompleto)

// console.log(persona)


// console.log(persona2)
// console.log(persona3)
// console.log(persona4)
// console.log(persona5)




