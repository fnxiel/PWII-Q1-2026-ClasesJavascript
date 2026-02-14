import { IPasatiempo } from "./models/interfaces/IPasatiempo"
import { IPersona } from "./models/interfaces/IPersona"

//Sin clases
const funcionDecirEdad = () => 10

let persona: IPersona = {
    id: 1, nombre: "Nombre", apellido: "Apellido", edad: 1, direccion: "CEUTEC", estado: "Activo",
    saludar: function (): void {
        console.log("Hola")
    },
    presentarse: function (nombre: string): void {
        console.log("Hola")
    },
    retornarEdad: funcionDecirEdad,
    observacion: "Observacion",
    pasatiempos: {
        id: 1,
        descripcion: "Programar",
        categoria: "Habilidades técnicas",
    },
    pertenencias: []
}

let pasatiempo: IPasatiempo = {
    id: 2,
    descripcion: "Correr",
    categoria: "Actividad física"
}

let persona2: IPersona = {
    id: 2,
    nombre: "Nuevo nombre",
    apellido: "Otro apellido",
    edad: 20,
    direccion: null,
    estado: "Activo",
    saludar: function (): void {
        console.log("Adios")
    },
    presentarse: function (nombre: string): void {
        console.log("Adios")
    },
    retornarEdad: funcionDecirEdad,
    pasatiempos: pasatiempo,
    pertenencias: [
        {id: 1, descripcion: "Mochila"}, 
        {id: 2, descripcion: "Cuaderno"}
    ]
}

console.log(persona)
console.log(persona2)

persona.saludar()
persona2.saludar()

console.log(persona.retornarEdad())
console.log(persona2.retornarEdad())
