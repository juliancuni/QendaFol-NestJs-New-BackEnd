import { Module } from '@nestjs/common';
import { KategoriteService } from './kategorite.service';
import { KategoriteController } from './kategorite.controller';

@Module({
  controllers: [KategoriteController],
  providers: [KategoriteService]
})
export class KategoriteModule {}
