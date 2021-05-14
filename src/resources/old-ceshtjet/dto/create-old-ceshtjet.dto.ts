import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateOldCeshtjeDto {
    @IsNotEmpty()
    emri: string;
    @IsNotEmpty()
    mbiemri: string;

}