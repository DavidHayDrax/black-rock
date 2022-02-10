import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';
import { CreateCompraDTO } from './dto/compra.dto';
import { Compra } from './interfaces/compra.interface';

@Injectable()
export class CompraService {
    constructor(@InjectModel('Compra') private readonly compraModel: Model<Compra>) {}

    // Get all products
    async getCompras(): Promise<Compra[]> {
        const compras = await this.compraModel.find();
        return compras;
    }
    
    // Get a single Product
    async getCompra(compraID: string): Promise<Compra> {
        const compra = await this.compraModel.findById(compraID); 
        return compra;
    }

    // Post a single product
    async createCompra(createCompraDTO: CreateCompraDTO): Promise<Compra> {
        const newCompra = new this.compraModel(createCompraDTO);
        return newCompra.save();
    }

    // Delete Product
    async deleteCompra(compraID: string): Promise<any> {
        const deletedCompra = await this.compraModel.findByIdAndDelete(compraID);
        return deletedCompra;
    }

    // Put a single product
    async updateCompra(compraID: string, createCompraDTO: CreateCompraDTO): Promise<Compra> {
        const updatedCompra = await this.compraModel.findByIdAndUpdate(compraID, createCompraDTO, {new: true});
        return updatedCompra;
    }

}
