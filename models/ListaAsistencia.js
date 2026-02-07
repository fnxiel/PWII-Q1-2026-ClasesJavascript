class ListaAsistencia{
    id
    fecha
    asignatura
    registroAsistencia
    constructor(id, asignatura){
        this.id = id
        this.fecha = new Date()
        this.asignatura =asignatura
        this.registroAsistencia = []
    }

    registrarAsistencia(registroAsistencia){
        console.log(`Se agregó el registro de asistencia para el alumno ${registroAsistencia.persona.nombreCompleto}, en la clase ${this.asignatura}, en la fecha ${this.fecha.toLocaleDateString()}`)
        this.registroAsistencia.push(registroAsistencia)
    }
    
    registrarAsistenciaMultiple(registrosAsistencia){
        
    }

    mostrarAusentes(){
        const resultado = this.registroAsistencia.filter(registro => registro.asistio === false)
        if(resultado){
            console.log("Alumnos ausentes")
            console.log(resultado)
        }else{
            console.log("Todos los alumnos asistieron para esta fecha")
        }
    }
}

module.exports = {ListaAsistencia}