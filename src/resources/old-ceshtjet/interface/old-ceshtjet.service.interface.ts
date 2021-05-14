import { BaseInterfaceRepository } from "src/repositories/base/base.interface.repository";
import { DeleteResult, UpdateResult } from "typeorm";
import { CreateOldCeshtjeDto } from "../dto/create-old-ceshtjet.dto";
import { OldCeshtjet } from "../entity/old-ceshtje.entity";

export interface OldCeshtjetServiceInterface extends BaseInterfaceRepository<OldCeshtjet> {
    create(oldCeshtjeDto: CreateOldCeshtjeDto): Promise<OldCeshtjet>;
    findOneById(id: string): Promise<OldCeshtjet>;
    findAll(): Promise<OldCeshtjet[]>;
    remove(id: string): Promise<DeleteResult>;
    update(oldCeshtje: OldCeshtjet): Promise<UpdateResult>;
}