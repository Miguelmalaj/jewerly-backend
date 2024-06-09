import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static'
import { join } from 'path';
import { JewelryModule } from './jewelry/jewelry.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [

    ServeStaticModule.forRoot({
      rootPath: join(__dirname,'..','public'),
    }),

    MongooseModule.forRoot('mongodb://localhost:27017/nest-jewelry'),

    JewelryModule,

  ],
})
export class AppModule {}
