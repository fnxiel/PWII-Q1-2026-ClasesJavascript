class Persona {
    // propiedades o atributos
    id = 0
    nombre = "No definido"
    apellido
    edad
    direccion
    fechaRegistro

    // Metodos o funciones
    constructor(id, nombre, apellido, edad, direccion = "--No incluido--"){
        console.log("Instanciando clase para registro", id)
        this.id = id
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.direccion = direccion
        this.fechaRegistro = new Date()
    }

    saludar(nombre)
    {
        console.log(`Hola, mi nombre es ${this.nombreCompleto}, mucho gusto ${nombre}`)
    }

    decirInformacionPersonal()
    {
        console.log(`Tengo ${this.edad} años y vivo en ${this.direccion}`)
    }

    presentarse(nombre)
    {
        this.saludar(nombre)
        this.decirInformacionPersonal()
        console.log("Mucho gusto!")
    }

    aniversario(){
        this.edad = this.edad + 1
        console.log(`Acabo de cumplir años el dia de hoy ${new Date().toLocaleDateString()}, ahora tengo ${this.edad} años.`)
    }

    // get set
    get nombreCompleto(){
        return `${this.nombre} ${this.apellido}`
    }

}

module.exports = {Persona}