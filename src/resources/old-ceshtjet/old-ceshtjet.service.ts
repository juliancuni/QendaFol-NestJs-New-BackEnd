import { Inject, Injectable, Logger, NotFoundException } from "@nestjs/common";
import { DeleteResult, UpdateResult } from "typeorm";
import { CreateOldCeshtjeDto } from "./dto/create-old-ceshtjet.dto";
import { OldCeshtjet } from "./entity/old-ceshtje.entity";
import { OldCeshtjetRepositoryInterface } from './interface/old-ceshtjet.repository.interface'
import { OldCeshtjetServiceInterface } from "./interface/old-ceshtjet.service.interface";

@Injectable()
export class OldCeshtjetService implements OldCeshtjetServiceInterface {
    private readonly logger = new Logger(OldCeshtjetService.name);
    constructor(@Inject('OldCeshtjetRepositoryInterface') private readonly _oldCeshtjetRepository: OldCeshtjetRepositoryInterface) { }

    public async create(oldCeshtjetDto: any): Promise<OldCeshtjet> {
        return this._oldCeshtjetRepository.save(oldCeshtjetDto);
    }

    public async findOneById(id: string): Promise<OldCeshtjet> {
        return this._oldCeshtjetRepository.findOneById(id);
    }

    public async findAll(): Promise<OldCeshtjet[]> {
        return this._oldCeshtjetRepository.findAll();
    }

    public async update(id: string, oldCeshtje: OldCeshtjet): Promise<UpdateResult> {
        return;
    }

    public async remove(id: string): Promise<DeleteResult> {
        return this._oldCeshtjetRepository.remove(id);
    }


}