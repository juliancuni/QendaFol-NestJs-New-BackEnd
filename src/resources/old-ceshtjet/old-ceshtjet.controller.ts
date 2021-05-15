import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { DeleteResult, UpdateResult } from 'typeorm';
import { OldCeshtjeDto } from './dto/create-old-ceshtjet.dto';
import { OldCeshtjet } from './entity/old-ceshtje.entity';
import { OldCeshtjetServiceInterface } from './interface/old-ceshtjet.service.interface';


@ApiTags('old-ceshtjet')
@Controller('old-ceshtjet')
export class OldCeshtjetController {
  constructor(
    @Inject('OldCeshtjetServiceInterface')
    private readonly _oldCeshtjetService: OldCeshtjetServiceInterface,
  ) {}

  @Get()
  public async findAll(): Promise<OldCeshtjet[]> {
    return await this._oldCeshtjetService.findAll();
  }

  @Get(':id')
  public async findOneById(@Param('id') id: string) {
    let result;
    try {
      result = await this._oldCeshtjetService.findOneById(id);
    } catch (error) {
      throw new NotFoundException('Nuk gjendet asnje rekord');
    }
    if (result) {
      return result;
    }

    throw new NotFoundException('Nuk gjendet asnje rekord');
  }
  @ApiBearerAuth()
  @Post()
  public async create(
    @Body() oldCeshtjetDto: OldCeshtjeDto,
  ): Promise<OldCeshtjet> {
    return await this._oldCeshtjetService.create(oldCeshtjetDto);
  }
  @ApiBearerAuth()
  @Patch('update')
  public async updateOne(@Body() oldCeshtje: OldCeshtjeDto): Promise<UpdateResult> {
    return this._oldCeshtjetService.update(oldCeshtje as any);
  }
  @ApiBearerAuth()
  @Delete()
  public async remove(@Body('id') id: any): Promise<DeleteResult> {
    let result;
    try {
      result = await this._oldCeshtjetService.remove(id);
    } catch (error) {
      throw new NotFoundException('Nuk u fshi asnje rekord');
    }
    return result;
  }
}
