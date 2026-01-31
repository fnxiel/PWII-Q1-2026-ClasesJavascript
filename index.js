var colors = require('colors');
const {Persona} = require('./models/Persona')
const {Empleado} = require('./models/Empleado')
 
let persona = new Persona(1, "Luke", "Skywalker", 24, "Tatooine")
let persona2 = new Persona(2, "Han", "Solo", 35)
let persona3 = new Persona(3, "Leia", "Organa", 24, "Tegucigalpa")
let persona4 = new Persona(4, "Darth", "Vader", 50, "Tatooine")
let persona5 = new Persona(5, "Conde", "Duku", 80)

let empleado = new Empleado(6, "Chewaka", "Wookie", 50, "Alcon milenario", 10000, "Docente")

empleado.presentarse(persona.nombreCompleto)
console.log(empleado)

console.log(persona)

persona.saludar("Alumnos")
persona2.saludar(persona.nombre)

console.log("--persona3--")
persona3.decirInformacionPersonal()

console.log("--persona--")
persona.presentarse(persona5.nombre)
persona.aniversario()
persona.aniversario()
persona.aniversario()

console.log(persona.nombreCompleto)

persona.nombre = "Darth"
persona.apellido = "Vader"
persona.direccion = "Estrella de la muerte"

console.log(persona.nombreCompleto)

console.log(persona)


// console.log(persona2)
// console.log(persona3)
// console.log(persona4)
// console.log(persona5)




