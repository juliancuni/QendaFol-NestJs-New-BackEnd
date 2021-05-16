import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { KomentiService } from './komenti.service';
import { CreateKomentiDto } from './dto/create-komenti.dto';
import { UpdateKomentiDto } from './dto/update-komenti.dto';

@Controller('komenti')
export class KomentiController {
  constructor(private readonly komentiService: KomentiService) {}

  @Post()
  create(@Body() createKomentiDto: CreateKomentiDto) {
    return this.komentiService.create(createKomentiDto);
  }

  @Get()
  findAll() {
    return this.komentiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.komentiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKomentiDto: UpdateKomentiDto) {
    return this.komentiService.update(+id, updateKomentiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.komentiService.remove(+id);
  }
}
