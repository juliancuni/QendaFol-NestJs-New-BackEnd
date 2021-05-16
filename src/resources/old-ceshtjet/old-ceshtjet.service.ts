import { Inject, Injectable, Logger } from '@nestjs/common';
import { DeleteResult, UpdateResult } from 'typeorm';
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
  findWithRelations(relations: any): Promise<OldCeshtjet[]> {
    throw new Error('Method not implemented.');
  }

  public async create(oldCeshtjetDto: any): Promise<OldCeshtjet> {
    return await this._oldCeshtjetRepository.create(oldCeshtjetDto);
  }

  public async findOneById(id: string): Promise<OldCeshtjet> {
    return await this._oldCeshtjetRepository.findOneById(id);
  }

  public async findAll(): Promise<OldCeshtjet[]> {
    return await this._oldCeshtjetRepository.findAll();
  }

  public async update(oldCeshtje: OldCeshtjet): Promise<UpdateResult> {
    return await this._oldCeshtjetRepository.update(oldCeshtje);
  }

  public async remove(id: string): Promise<DeleteResult> {
    return await this._oldCeshtjetRepository.remove(id);
  }

  public async bulk(oldCeshtjet: OldCeshtjet[]): Promise<any> {

    oldCeshtjet.forEach(async (oldCeshtje) => {
      const exists = await this.checkIfExists(oldCeshtje);
      let nrAdded = 0;
      let nrNotAdded = 0;
      if (!exists) {
        const resultAded = this._oldCeshtjetRepository.create(oldCeshtje);
        if (resultAded) {
          nrAdded++;
        } else {
          nrNotAdded++;
        }
      }
    })
  }

  private async checkIfExists(oldCeshtje: OldCeshtjet): Promise<boolean> {
    const result = await this._oldCeshtjetRepository.findByCondition({
      emri: oldCeshtje.emri,
      mbiemri: oldCeshtje.mbiemri,
    });
    return result.length > 0;
  }
}
