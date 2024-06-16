import { PartialType } from '@nestjs/mapped-types';
import { CreateMetalTypeDto } from './create-metal-type.dto';

export class UpdateMetalTypeDto extends PartialType(CreateMetalTypeDto) {}
