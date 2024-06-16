import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static'
import { join } from 'path';
import { JewelryModule } from './jewelry/jewelry.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MetalTypesModule } from './metal-types/metal-types.module';
import { ItemTypesModule } from './item-types/item-types.module';
import { RequestsModule } from './requests/requests.module';
import { UsersModule } from './users/users.module';
import { CustomersModule } from './customers/customers.module';
import { InvoicesModule } from './invoices/invoices.module';

@Module({
  imports: [

    ServeStaticModule.forRoot({
      rootPath: join(__dirname,'..','public'),
    }),

    MongooseModule.forRoot('mongodb://localhost:27017/nest-jewelry'),

    JewelryModule,

    MetalTypesModule,

    ItemTypesModule,

    RequestsModule,

    UsersModule,

    CustomersModule,

    InvoicesModule,

  ],
})
export class AppModule {}
