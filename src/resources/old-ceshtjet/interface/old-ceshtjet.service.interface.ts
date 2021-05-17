import { BaseInterfaceRepository } from 'src/repositories/base/base.interface.repository';
import { DeleteResult, UpdateResult } from 'typeorm';
import { BulkReportDto } from '../dto/bulk-report.dto';
import { OldCeshtjeDto } from '../dto/old-ceshtjet.dto';
import { OldCeshtjet } from '../entity/old-ceshtje.entity';

export interface OldCeshtjetServiceInterface
  extends BaseInterfaceRepository<OldCeshtjet> {
  create(OldCeshtje: OldCeshtjet): Promise<OldCeshtjet>;
  findOneById(id: string): Promise<OldCeshtjet>;
  findAll(): Promise<OldCeshtjet[]>;
  remove(id: string): Promise<DeleteResult>;
  update(oldCeshtje: OldCeshtjet): Promise<UpdateResult>;
  bulk(username: string, oldCeshtjet: OldCeshtjet[]): Promise<BulkReportDto>;
}
