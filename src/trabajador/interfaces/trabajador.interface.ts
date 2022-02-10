import { Document } from "mongoose";

export interface Trabajador extends Document {
    readonly nombre: string;
    readonly apellido: string;
    readonly cargo: string;
    readonly dni: number;
    readonly imageURL: string;
}