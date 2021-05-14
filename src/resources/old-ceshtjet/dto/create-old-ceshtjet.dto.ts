import { IsNotEmpty } from 'class-validator';

export class CreateOldCeshtjeDto {
  @IsNotEmpty()
  readonly emri: string;
  @IsNotEmpty()
  readonly mbiemri: string;
}
