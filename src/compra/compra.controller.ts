import { Controller, Post, Res, HttpStatus, Body, Get, Param, NotFoundException, Delete, Query, Put } from '@nestjs/common';
import { CompraService } from './compra.service';
import { CreateCompraDTO } from './dto/compra.dto';

@Controller('compra')
export class CompraController {
    constructor(private compraService: CompraService) { }

    @Post('/create')
    async createCompra(@Res() res, @Body() createCompraDTO: CreateCompraDTO) {
        const compra = await this.compraService.createCompra(createCompraDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Compra Successfully Created',
            compra
        });
    }

    @Get('/')
    async getCompras(@Res() res) {
        const compras = await this.compraService.getCompras();
        return res.status(HttpStatus.OK).json(compras);
    }

    @Get('/:compraID')
    async getCompra(@Res() res, @Param('compraID') compraID) {
        const compra = await this.compraService.getCompra(compraID);
        if (!compra) throw new NotFoundException('Compra does not exist!');
        return res.status(HttpStatus.OK).json(compra);
    }

    // Delete Product: /delete?productID=5c9d45e705ea4843c8d0e8f7
    @Delete('/delete')
    async deleteCompra(@Res() res, @Query('compraID') compraID) {
        const compraDeleted = await this.compraService.deleteCompra(compraID);
        if (!compraDeleted) throw new NotFoundException('Compra does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Compra Deleted Successfully',
            compraDeleted
        });
    }

    // Update Product: /update?productID=5c9d45e705ea4843c8d0e8f7

    @Put('/update')
    async updateCompra(@Res() res, @Body() createCompraDTO: CreateCompraDTO, @Query('compraID') compraID) {
        const updatedCompra = await this.compraService.updateCompra(compraID, createCompraDTO);
        if (!updatedCompra) throw new NotFoundException('Compra does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Compra Updated Successfully',
            updatedCompra 
        });
    }
}
