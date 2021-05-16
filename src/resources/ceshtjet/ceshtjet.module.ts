import { Module } from '@nestjs/common';
import { CeshtjetService } from './ceshtjet.service';
import { CeshtjetController } from './ceshtjet.controller';

@Module({
  controllers: [CeshtjetController],
  providers: [CeshtjetService]
})
export class CeshtjetModule {}
