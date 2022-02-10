import { Schema } from "mongoose";

export const TrabajadorSchema = new Schema({
    nombre: String,
    apellido: String,
    cargo: String,
    dni: Number,
    imageURL: String
});