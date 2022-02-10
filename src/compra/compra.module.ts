import { Module } from '@nestjs/common';
import { CompraService } from './compra.service';
import { CompraController } from './compra.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CompraSchema } from './schemas/compra.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Compra', schema: CompraSchema}])],
  providers: [CompraService],
  controllers: [CompraController]
})
export class CompraModule {}
