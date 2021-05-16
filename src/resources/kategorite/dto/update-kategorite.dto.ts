import { PartialType } from '@nestjs/swagger';
import { CreateKategoriteDto } from './create-kategorite.dto';

export class UpdateKategoriteDto extends PartialType(CreateKategoriteDto) {}
