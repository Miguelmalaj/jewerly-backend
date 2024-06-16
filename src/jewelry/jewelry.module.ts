import { Module } from '@nestjs/common';
import { JewelryService } from './jewelry.service';
import { JewelryController } from './jewelry.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Jewelry } from './entities';
import { JewelrySchema } from './entities/jewelry.entity';

@Module({
  controllers: [JewelryController],
  providers: [JewelryService],
  imports: [
    MongooseModule.forFeature([
      { name: Jewelry.name, schema: JewelrySchema },
    ])
  ]
})
export class JewelryModule {}
