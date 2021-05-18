import { Inject, Injectable, Logger } from '@nestjs/common';
import { DeleteResult, UpdateResult } from 'typeorm';
import { BulkReportDto } from './dto/bulk-report.dto';
import { OldCeshtjeDto } from './dto/old-ceshtjet.dto';
import { OldCeshtjet } from './entity/old-ceshtje.entity';
import { OldCeshtjetRepositoryInterface } from './interface/old-ceshtjet.repository.interface';
import { OldCeshtjetServiceInterface } from './interface/old-ceshtjet.service.interface';

@Injectable()
export class OldCeshtjetService implements OldCeshtjetServiceInterface {
  private readonly logger = new Logger(OldCeshtjetService.name);
  constructor(
    @Inject('OldCeshtjetRepositoryInterface')
    private readonly _oldCeshtjetRepository: OldCeshtjetRepositoryInterface,
  ) { }

  public async findByCondition(filterCondition: any): Promise<OldCeshtjet[]> {
    return this._oldCeshtjetRepository.findByCondition(filterCondition);
  }
  findWithRelations(relations: any): Promise<OldCeshtjeDto[]> {
    throw new Error('Method not implemented.');
  }

  public async create(oldCeshtjetDto: OldCeshtjeDto): Promise<OldCeshtjet> {
    return await this._oldCeshtjetRepository.create(oldCeshtjetDto);
  }

  public async findOneById(id: string): Promise<OldCeshtjet> {
    return await this._oldCeshtjetRepository.findOneById(id);
  }

  public async findAll(): Promise<OldCeshtjet[]> {
    return await this._oldCeshtjetRepository.findAll();
  }

  public async update(oldCeshtje: OldCeshtjeDto): Promise<UpdateResult> {

    return await this._oldCeshtjetRepository.update(oldCeshtje);
  }

  public async remove(id: string): Promise<DeleteResult> {
    return await this._oldCeshtjetRepository.remove(id);
  }

  public async bulk(username: string, oldCeshtjet: OldCeshtjeDto[]): Promise<BulkReportDto> {
    let bulkReportDto = new BulkReportDto();
    bulkReportDto.nrImportedSuccess = 0;
    bulkReportDto.nrUpdatedSuccess = 0;
    bulkReportDto.nrImportedFailure = 0;
    bulkReportDto.nrUpdatedFailure = 0;
    bulkReportDto.importFailedoldids = [];
    bulkReportDto.importFailedoldids = [];
    bulkReportDto.username = username;
    let nrOfLongText= 1;
    for (const oldCeshtje of oldCeshtjet) {
      if(oldCeshtje.policia && oldCeshtje.policia.length >= 2000) {
        console.log(nrOfLongText, oldCeshtje.oldid, oldCeshtje.policia.length);
        nrOfLongText++; 
      }
      const exists = await this.checkIfExists(oldCeshtje);
      if (!exists) {
        const resultAdded = await this._oldCeshtjetRepository.create(oldCeshtje);
        if (resultAdded) {
          bulkReportDto.nrImportedSuccess++;
        } else {
          bulkReportDto.nrImportedFailure++;
          bulkReportDto.importFailedoldids.push(oldCeshtje.oldid)
        }
      } else {
        const findOldCeshtje = await this._oldCeshtjetRepository.findByCondition({oldid: oldCeshtje.oldid});

        const resultAdded = await this._oldCeshtjetRepository.update(findOldCeshtje[0]);
        if (resultAdded.affected > 0) {
          bulkReportDto.nrUpdatedSuccess++;
        } else {
          bulkReportDto.nrUpdatedFailure++;
          bulkReportDto.updateFailedoldids.push(oldCeshtje.oldid)
        }
      }
    }
    return bulkReportDto;
  }

  private async checkIfExists(oldCeshtje: OldCeshtjeDto): Promise<boolean> {
    const result = await this._oldCeshtjetRepository.findByCondition({
      oldid: oldCeshtje.oldid,
      // emri: oldCeshtje.emri,
      // mbiemri: oldCeshtje.mbiemri,
    });
    return result.length > 0;
  }
}
