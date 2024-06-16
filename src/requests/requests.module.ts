import { Module } from '@nestjs/common';
import { RequestsService } from './requests.service';
import { RequestsController } from './requests.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Request, RequestSchema } from './entities/request.entity';

@Module({
  controllers: [RequestsController],
  providers: [RequestsService],
  imports: [
    MongooseModule.forFeature([
      { name: Request.name, schema: RequestSchema },
    ])
  ]
})
export class RequestsModule {}
