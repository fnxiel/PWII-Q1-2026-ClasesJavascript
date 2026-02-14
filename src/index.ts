import { Pasatiempo } from "./models/clases/Pasatiempo"
import { Persona } from "./models/clases/Persona"
import { Pertenencia } from "./models/clases/Pertencia"
import { IPasatiempo } from "./models/interfaces/IPasatiempo"
import { IPersona } from "./models/interfaces/IPersona"
import { IPertenencia } from "./models/interfaces/IPertenencia"

//Con clases
let pasatiempo: IPasatiempo = new Pasatiempo(1, "Correr", "Actividad Fisica")
let pasatiempo2: IPasatiempo = new Pasatiempo(2, "Jugar", "Entretenimiento")
let pertenencia: IPertenencia = new Pertenencia(1, "Mochila")
let persona: IPersona = new Persona(1, "Prueba", "Prueba", 25, "Direccion", "Activo", pasatiempo, "Observacion" )
let persona2: IPersona = new Persona(2, "Prueba2", "Prueba2", 30, "Direccion", "Inactivo", pasatiempo2)
persona2.pertenencias.push(pertenencia)

persona.saludar()
persona2.saludar()

console.log(persona.retornarEdad())
console.log(persona2.retornarEdad())

console.log(persona)
console.log(persona2)
