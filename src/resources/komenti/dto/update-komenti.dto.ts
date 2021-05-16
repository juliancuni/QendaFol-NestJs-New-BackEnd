import { PartialType } from '@nestjs/swagger';
import { CreateKomentiDto } from './create-komenti.dto';

export class UpdateKomentiDto extends PartialType(CreateKomentiDto) {}
