import { Schema } from "mongoose";

export const CompraSchema = new Schema({
    producto: String,
    precio: Number,
    fecha: String,
    trabajador: String,
    factura: String,
    ruc: String,
    imageURL: String
});