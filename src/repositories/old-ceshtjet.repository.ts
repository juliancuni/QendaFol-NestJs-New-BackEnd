import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { OldCeshtjet } from "src/resources/old-ceshtjet/entity/old-ceshtje.entity";
import { Repository } from "typeorm";
import { BaseAbstractRepository } from "./base/base.abstract.repository";
import { BaseInterfaceRepository } from "./base/base.interface.repository";

@Injectable()
export class OldCeshtjetRepository extends BaseAbstractRepository<OldCeshtjet> implements BaseInterfaceRepository<OldCeshtjet> {
    constructor(@InjectRepository(OldCeshtjet) private readonly _oldCeshtjetRepository: Repository<OldCeshtjet>) {
        super(_oldCeshtjetRepository);
    }
}