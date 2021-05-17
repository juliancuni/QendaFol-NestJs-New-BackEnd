import { BaseInterfaceRepository } from 'src/repositories/base/base.interface.repository';
import { OldCeshtjeDto } from '../dto/old-ceshtjet.dto';
import { OldCeshtjet } from '../entity/old-ceshtje.entity';

export type OldCeshtjetRepositoryInterface =
  BaseInterfaceRepository<OldCeshtjet>;
