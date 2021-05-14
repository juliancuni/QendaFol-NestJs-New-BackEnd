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
  ) {}

  findByCondition(filterCondition: any): Promise<OldCeshtjet[]> {
    throw new Error('Method not implemented.');
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
}
