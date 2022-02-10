import { Controller, Post, Res, HttpStatus, Body, Get, Param, NotFoundException, Delete, Query, Put } from '@nestjs/common';
import { CreateTrabajadorDTO } from './dto/trabajador.dto';
import { TrabajadorService } from './trabajador.service';


@Controller('trabajador')
export class TrabajadorController {
    constructor(private trabajadorService: TrabajadorService) { }

    @Post('/create')
    async createTrabajador(@Res() res, @Body() createTrabajadorDTO: CreateTrabajadorDTO) {
        const trabajador = await this.trabajadorService.createTrabajador(createTrabajadorDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Trabajador Successfully Created',
            trabajador
        });
    }

    @Get('/')
    async getTrabajadores(@Res() res) {
        const trabajadores = await this.trabajadorService.getTrabajadores();
        return res.status(HttpStatus.OK).json(trabajadores);
    }

    // GET per ID
    @Get('/:trabajadorID')
    async getTrabajador(@Res() res, @Param('trabajadorID') trabajadorID) {
        const trabajador = await this.trabajadorService.getTrabajador(trabajadorID);
        if (!trabajador) throw new NotFoundException('Trabajador does not exist!');
        return res.status(HttpStatus.OK).json(trabajador);
    }

    // Delete 
    @Delete('/delete')
    async deleteTrabajador(@Res() res, @Query('trabajadorID') trabajadorID) {
        const trabajadorDeleted = await this.trabajadorService.deleteTrabajador(trabajadorID);
        if (!trabajadorDeleted) throw new NotFoundException('Trabajador does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Trabajador Deleted Successfully',
            trabajadorDeleted
        });
    }

    // Update 
    @Put('/update')
    async updateTrabajador(@Res() res, @Body() createTrabajadorDTO: CreateTrabajadorDTO, @Query('trabajadorID') trabajadorID) {
        const updatedTrabajador = await this.trabajadorService.updateTrabajador(trabajadorID, createTrabajadorDTO);
        if (!updatedTrabajador) throw new NotFoundException('Trabajador does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Trabajador Updated Successfully',
            updatedTrabajador
        });
    }
}
