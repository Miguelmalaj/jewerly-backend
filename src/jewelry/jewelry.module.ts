import { Module } from '@nestjs/common';
import { JewelryService } from './jewelry.service';
import { JewelryController } from './jewelry.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MetalTypes, ItemTypes, Jewelry, Customers, Invoices, Users, Requests } from './entities';
import { JewelrySchema } from './entities/jewelry.entity';
import { CustomersSchema } from './entities/customers.entity';
import {  MetalTypesSchema } from './entities/metal-types.entity';
import {  ItemTypesSchema } from './entities/item-types.entity';
import { InvoicesSchema } from './entities/invoices.entity';
import { UsersSchema } from './entities/users.entity';
import { RequestsSchema } from './entities/requests.entity';

@Module({
  controllers: [JewelryController],
  providers: [JewelryService],
  imports: [
    MongooseModule.forFeature([
      { name: Jewelry.name, schema: JewelrySchema },
      { name: ItemTypes.name, schema: ItemTypesSchema },
      { name: MetalTypes.name, schema: MetalTypesSchema },
      { name: Customers.name, schema: CustomersSchema },
      { name: Invoices.name, schema: InvoicesSchema },
      { name: Users.name, schema: UsersSchema },
      { name: Requests.name, schema: RequestsSchema },
    ])
  ]
})
export class JewelryModule {}
