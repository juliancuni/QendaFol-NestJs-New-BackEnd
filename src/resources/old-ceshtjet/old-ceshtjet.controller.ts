import { Body, Controller, Delete, Get, Inject, NotFoundException, Param, Patch, Post, Put } from "@nestjs/common";
import { DeleteResult, UpdateResult } from "typeorm";
import { CreateOldCeshtjeDto } from "./dto/create-old-ceshtjet.dto";
import { OldCeshtjet } from "./entity/old-ceshtje.entity";
import { OldCeshtjetServiceInterface } from "./interface/old-ceshtjet.service.interface";

@Controller('old-ceshtjet')
export class OldCeshtjetController {
    constructor(@Inject('OldCeshtjetServiceInterface') private readonly _oldCeshtjetService: OldCeshtjetServiceInterface) { }


    @Get()
    public async findAll(): Promise<OldCeshtjet[]> {
        return await this._oldCeshtjetService.findAll();
    }

    @Get(':id')
    public async findOneById(@Param('id') id: string) {
        const result = await this._oldCeshtjetService.findOneById(id);
        if (result) return result;
        throw new NotFoundException("Nuk gjendet asnje rekord findbyid");
    }

    @Post()
    public async create(@Body() oldCeshtjetDto: CreateOldCeshtjeDto): Promise<OldCeshtjet> {
        return await this._oldCeshtjetService.create(oldCeshtjetDto);
    }

    @Patch('update')
    public async updateOne(@Body() oldCeshtje: any): Promise<UpdateResult> {
        return this._oldCeshtjetService.update(oldCeshtje);
    }

    @Delete()
    public async remove(@Body('id') id: any): Promise<DeleteResult> {
        return await this._oldCeshtjetService.remove(id);
    }
}