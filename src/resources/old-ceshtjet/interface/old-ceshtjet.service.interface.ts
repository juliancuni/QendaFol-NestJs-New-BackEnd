import { CreateOldCeshtjeDto } from "../dto/create-old-ceshtjet.dto";
import { OldCeshtjet } from "../entity/old-ceshtje.entity";

export interface OldCeshtjetServiceInterface {
    create(oldCeshtjeDto: CreateOldCeshtjeDto): Promise<OldCeshtjet>;
}