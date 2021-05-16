import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CeshtjetService } from './ceshtjet.service';
import { CeshtjetDto } from './dto/ceshtjet.dto';

@Controller('ceshtjet')
export class CeshtjetController {
  constructor(private readonly ceshtjetService: CeshtjetService) {}

  @Post()
  create(@Body() ceshtjetDto: CeshtjetDto) {
    return this.ceshtjetService.create(ceshtjetDto);
  }

  @Get()
  findAll() {
    return this.ceshtjetService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ceshtjetService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() ceshtjetDto: CeshtjetDto) {
    return this.ceshtjetService.update(+id, ceshtjetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ceshtjetService.remove(+id);
  }
}
