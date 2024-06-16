import { Module } from '@nestjs/common';
import { MetalTypesService } from './metal-types.service';
import { MetalTypesController } from './metal-types.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MetalType, MetalTypeSchema } from './entities/metal-type.entity';

@Module({
  controllers: [MetalTypesController],
  providers: [MetalTypesService],
  imports: [
    MongooseModule.forFeature([
      { name: MetalType.name, schema: MetalTypeSchema },
    ])
  ]
})
export class MetalTypesModule {}
