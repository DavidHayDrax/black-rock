import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';
import { CreateTareaDTO } from './dto/tarea.dto';
import { Tarea } from './interfaces/tarea.interface';

@Injectable()
export class TareaService {
    constructor(@InjectModel('Tarea') private readonly tareaModel: Model<Tarea>) {}


    async getTareas(): Promise<Tarea[]> {
        const tareas = await this.tareaModel.find();
        return tareas;
    }
    
    async getTarea(tareaID: string): Promise<Tarea> {
        const tarea = await this.tareaModel.findById(tareaID); 
        return tarea;
    }

    async createTarea(createTareaDTO: CreateTareaDTO): Promise<Tarea> {
        const newTarea = new this.tareaModel(createTareaDTO);
        return newTarea.save();
    }


    async deleteTarea(tareaID: string): Promise<any> {
        const deletedTarea = await this.tareaModel.findByIdAndDelete(tareaID);
        return deletedTarea;
    }

    async updateTarea(tareaID: string, createTareaDTO: CreateTareaDTO): Promise<Tarea> {
        const updatedTarea = await this.tareaModel.findByIdAndUpdate(tareaID, createTareaDTO, {new: true});
        return updatedTarea;
    }
}
