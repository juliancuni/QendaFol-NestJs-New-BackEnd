import { Body, Controller, Get, Inject, Post } from "@nestjs/common";
import { CreateOldCeshtjeDto } from "./dto/create-old-ceshtjet.dto";
import { OldCeshtjet } from "./entity/old-ceshtje.entity";
import { OldCeshtjetServiceInterface } from "./interface/old-ceshtjet.service.interface";

@Controller('old-ceshtjet')
export class OldCeshtjetController {
    constructor(@Inject('OldCeshtjetServiceInterface') private readonly _oldCeshtjetService: OldCeshtjetServiceInterface) { }

    @Get()
    public get() {
        return "test"
    }

    @Post()
    public async create(@Body() oldCeshtjetDto: CreateOldCeshtjeDto): Promise<OldCeshtjet> {
        return await this._oldCeshtjetService.create(oldCeshtjetDto);
    }

    // @Get()
    // public async findAll(): Promise<OldCeshtjet[]> {
    //     return await this._oldCeshtjetService.findAll();
    // }
}