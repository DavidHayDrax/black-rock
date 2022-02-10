import { Document } from "mongoose";

export interface Compra extends Document {
    readonly producto: string;
    readonly precio: number;
    readonly fecha: string;
    readonly trabajador: string;
    readonly factura: string;
    readonly ruc: string;
    readonly imageURL: string;
}