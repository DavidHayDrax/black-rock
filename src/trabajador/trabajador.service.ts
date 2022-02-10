import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTrabajadorDTO } from './dto/trabajador.dto';
import { Trabajador } from './interfaces/trabajador.interface';

@Injectable()
export class TrabajadorService {
    constructor(@InjectModel('Trabajador') private readonly trabajadorModel: Model<Trabajador>) {}


    async getTrabajadores(): Promise<Trabajador[]> {
        const trabajadores = await this.trabajadorModel.find();
        return trabajadores;
    }
    
    async getTrabajador(trabajadorID: string): Promise<Trabajador> {
        const trabajador = await this.trabajadorModel.findById(trabajadorID); 
        return trabajador;
    }

    async createTrabajador(createTrabajadorDTO: CreateTrabajadorDTO): Promise<Trabajador> {
        const newTrabajador = new this.trabajadorModel(createTrabajadorDTO);
        return newTrabajador.save();
    }


    async deleteTrabajador(trabajadorID: string): Promise<any> {
        const deletedTrabajador = await this.trabajadorModel.findByIdAndDelete(trabajadorID);
        return deletedTrabajador;
    }

    async updateTrabajador(trabajadorID: string, createTrabajadorDTO: CreateTrabajadorDTO): Promise<Trabajador> {
        const updatedTrabajador = await this.trabajadorModel.findByIdAndUpdate(trabajadorID, createTrabajadorDTO, {new: true});
        return updatedTrabajador;
    }
}

