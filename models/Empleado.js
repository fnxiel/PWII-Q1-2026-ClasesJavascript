const { Persona } = require("./Persona")

class Empleado extends Persona{
    sueldo
    puesto

    constructor(id, nombre, apellido, edad, direccion, sueldo, puesto){
        super(id, nombre, apellido, edad, direccion)
        this.sueldo = sueldo
        this.puesto = puesto
    }
}

module.exports = {Empleado}