import { Injectable } from '@nestjs/common';
import { CreateMetalTypeDto } from './dto/create-metal-type.dto';
import { UpdateMetalTypeDto } from './dto/update-metal-type.dto';

@Injectable()
export class MetalTypesService {
  create(createMetalTypeDto: CreateMetalTypeDto) {
    return 'This action adds a new metalType';
  }

  findAll() {
    return `This action returns all metalTypes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} metalType`;
  }

  update(id: number, updateMetalTypeDto: UpdateMetalTypeDto) {
    return `This action updates a #${id} metalType`;
  }

  remove(id: number) {
    return `This action removes a #${id} metalType`;
  }
}
