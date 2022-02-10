import { Module } from '@nestjs/common';
import { TrabajadorService } from './trabajador.service';
import { TrabajadorController } from './trabajador.controller';
import { TrabajadorSchema } from './schemas/trabajador.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Trabajador', schema: TrabajadorSchema}])],
  providers: [TrabajadorService],
  controllers: [TrabajadorController]
})
export class TrabajadorModule {}
