import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MetalTypesService } from './metal-types.service';
import { CreateMetalTypeDto } from './dto/create-metal-type.dto';
import { UpdateMetalTypeDto } from './dto/update-metal-type.dto';

@Controller('metal-types')
export class MetalTypesController {
  constructor(private readonly metalTypesService: MetalTypesService) {}

  @Post()
  create(@Body() createMetalTypeDto: CreateMetalTypeDto) {
    return this.metalTypesService.create(createMetalTypeDto);
  }

  @Get()
  findAll() {
    return this.metalTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.metalTypesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMetalTypeDto: UpdateMetalTypeDto) {
    return this.metalTypesService.update(+id, updateMetalTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.metalTypesService.remove(+id);
  }
}
