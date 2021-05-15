import { HttpModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OldCeshtjetRepository } from 'src/repositories/old-ceshtjet.repository';
import { OldCeshtjet } from './entity/old-ceshtje.entity';
import { OldCeshtjetController } from './old-ceshtjet.controller';
import { OldCeshtjetService } from './old-ceshtjet.service';
@Module({
  imports: [
    TypeOrmModule.forFeature([OldCeshtjet]),
    HttpModule
  ],
  exports: [],
  providers: [
    {
      provide: 'OldCeshtjetRepositoryInterface',
      useClass: OldCeshtjetRepository,
    },
    { provide: 'OldCeshtjetServiceInterface', useClass: OldCeshtjetService },
  ],
  controllers: [OldCeshtjetController],
})
export class OldCeshtjetModule {}
