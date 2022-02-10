import { Document } from "mongoose";

export interface Tarea extends Document {
    readonly name: string;
    readonly description: string;
    readonly fechaDeInicio: string;
    readonly fechaDeTermino: string;
    readonly activo: boolean;
}