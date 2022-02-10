import { Controller, Post, Res, HttpStatus, Body, Get, Param, NotFoundException, Delete, Query, Put } from '@nestjs/common';
import { CreateTareaDTO } from './dto/tarea.dto';
import { TareaService } from './tarea.service';

@Controller('tarea')
export class TareaController {
    constructor(private tareaService: TareaService) { }

    @Post('/create')
    async createTarea(@Res() res, @Body() createTareaDTO: CreateTareaDTO) {
        const tarea = await this.tareaService.createTarea(createTareaDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Tarea Successfully Created',
            tarea
        });
    }

    @Get('/')
    async getTareas(@Res() res) {
        const tareas = await this.tareaService.getTareas();
        return res.status(HttpStatus.OK).json(tareas);
    }

    // GET per ID
    @Get('/:tareaID')
    async getTarea(@Res() res, @Param('tareaID') tareaID) {
        const tarea = await this.tareaService.getTarea(tareaID);
        if (!tarea) throw new NotFoundException('Tarea does not exist!');
        return res.status(HttpStatus.OK).json(tarea);
    }

    // Delete 
    @Delete('/delete')
    async deleteTrea(@Res() res, @Query('tareaID') tareaID) {
        const tareaDeleted = await this.tareaService.deleteTarea(tareaID);
        if (!tareaDeleted) throw new NotFoundException('Tarea does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Tarea Deleted Successfully',
            tareaDeleted
        });
    }

    // Update 
    @Put('/update')
    async updateTarea(@Res() res, @Body() createTareaDTO: CreateTareaDTO, @Query('tareaID') tareaID) {
        const updatedTarea = await this.tareaService.updateTarea(tareaID, createTareaDTO);
        if (!updatedTarea) throw new NotFoundException('Tarea does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Tarea Updated Successfully',
            updatedTarea
        });
    }
}
