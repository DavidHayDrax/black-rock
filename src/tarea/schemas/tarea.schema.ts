import { Schema } from "mongoose";

export const TareaSchema = new Schema({
    name: String,
    description: String,
    fechaDeInicio: String,
    fechaDeTermino: String,
    activo: Boolean
});