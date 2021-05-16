import { Module } from '@nestjs/common';
import { PersonatService } from './personat.service';
import { PersonatController } from './personat.controller';

@Module({
  controllers: [PersonatController],
  providers: [PersonatService]
})
export class PersonatModule {}
