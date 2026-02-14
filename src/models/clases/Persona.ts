import { IPasatiempo } from "../interfaces/IPasatiempo";
import { IPersona } from "../interfaces/IPersona";
import { IPertenencia } from "../interfaces/IPertenencia";

export class Persona implements IPersona{
    id: number;
    nombre: string;
    apellido: string;
    edad: number;
    direccion: string | null;
    estado: "Activo" | "Inactivo";
    observacion?: string | undefined;
    pasatiempos: IPasatiempo;
    pertenencias: IPertenencia[];

    constructor(
        id: number, 
        nombre: string,
        apellido: string, 
        edad: number, 
        direccion: string | null,
        estado: "Activo" | "Inactivo",
        pasatiempos: IPasatiempo,
        observacion?: string | undefined
    ){
        this.id = id
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.direccion = direccion
        this.estado = estado
        this.pasatiempos = pasatiempos
        this.pertenencias = []
        this.observacion = observacion
    }

    saludar(): void {
        console.log(`Hola, mi nombre es ${this.nombre}, mucho gusto.`)
    }
    presentarse(nombre: string): void {
       this.saludar()
       console.log(`Mucho gusto!, ${nombre}`)
    }
    retornarEdad(): number {
        return this.edad
    }

}