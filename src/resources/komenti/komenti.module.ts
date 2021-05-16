import { Module } from '@nestjs/common';
import { KomentiService } from './komenti.service';
import { KomentiController } from './komenti.controller';

@Module({
  controllers: [KomentiController],
  providers: [KomentiService]
})
export class KomentiModule {}
