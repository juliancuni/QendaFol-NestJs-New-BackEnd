import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class OldCeshtjeDto {
  @ApiProperty()
  @IsNotEmpty()
  readonly emri: string;
  @ApiProperty()
  @IsNotEmpty()
  readonly mbiemri: string;
}
