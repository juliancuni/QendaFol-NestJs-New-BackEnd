import { DeleteResult, UpdateResult } from "typeorm";
import { CreateOldCeshtjeDto } from "../dto/create-old-ceshtjet.dto";
import { OldCeshtjet } from "../entity/old-ceshtje.entity";

export interface OldCeshtjetServiceInterface {
    create(oldCeshtjeDto: CreateOldCeshtjeDto): Promise<OldCeshtjet>;
    findOneById(id: string): Promise<OldCeshtjet>;
    findAll(): Promise<OldCeshtjet[]>;
    update(id: string, oldCeshtje: any): Promise<UpdateResult>;
    remove(id: string): Promise<DeleteResult>;
}