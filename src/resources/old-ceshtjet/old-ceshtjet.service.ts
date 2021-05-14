import { Inject, Injectable } from "@nestjs/common";
import { OldCeshtjet } from "./entity/old-ceshtje.entity";
import { OldCeshtjetRepositoryInterface } from './interface/old-ceshtjet.repository.interface'
import { OldCeshtjetServiceInterface } from "./interface/old-ceshtjet.service.interface";

@Injectable()
export class OldCeshtjetService implements OldCeshtjetServiceInterface {
    constructor(@Inject('OldCeshtjetRepositoryInterface') private readonly _oldCeshtjetRepository: OldCeshtjetRepositoryInterface) { }

    public async create(oldCeshtjetDto: any): Promise<OldCeshtjet> {
        const oldCeshtje = new OldCeshtjet();
        oldCeshtje.emri = oldCeshtjetDto.emri;
        oldCeshtje.mbiemri = oldCeshtjetDto.mbiemri;
        return this._oldCeshtjetRepository.create(oldCeshtje);
    }
    public async findAll(): Promise<OldCeshtjet[]> {
        return this._oldCeshtjetRepository.findAll();
    }
}