import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from "@nestjs/mongoose";
import { TrabajadorModule } from './trabajador/trabajador.module';
import { TareaModule } from './tarea/tarea.module';
import { CompraModule } from './compra/compra.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/products-nest', {
      useNewUrlParser: true
    }),
    TrabajadorModule,
    TareaModule,
    CompraModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
