import { Module } from '@nestjs/common';
import { ItemTypesService } from './item-types.service';
import { ItemTypesController } from './item-types.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemType, ItemTypeSchema } from './entities/item-type.entity';

@Module({
  controllers: [ItemTypesController],
  providers: [ItemTypesService],
  imports: [
    MongooseModule.forFeature([
      { name: ItemType.name, schema: ItemTypeSchema },
    ])
  ]
})
export class ItemTypesModule {}
