import { IPasatiempo } from "./IPasatiempo"
import { IPertenencia } from "./IPertenencia"

//Tipos
//palabra clave type y palabra clave interface
export interface IPersona{
    id: number
    nombre: string
    apellido: string
    edad: number
    direccion: string | null
    estado: "Activo" | "Inactivo"
    observacion?: string
    pasatiempos: IPasatiempo
    pertenencias: IPertenencia[]
    saludar(): void
    presentarse(nombre: string): void
    retornarEdad(): number
}