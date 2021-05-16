import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { KategoriteService } from './kategorite.service';
import { CreateKategoriteDto } from './dto/create-kategorite.dto';
import { UpdateKategoriteDto } from './dto/update-kategorite.dto';

@Controller('kategorite')
export class KategoriteController {
  constructor(private readonly kategoriteService: KategoriteService) {}

  @Post()
  create(@Body() createKategoriteDto: CreateKategoriteDto) {
    return this.kategoriteService.create(createKategoriteDto);
  }

  @Get()
  findAll() {
    return this.kategoriteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kategoriteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKategoriteDto: UpdateKategoriteDto) {
    return this.kategoriteService.update(+id, updateKategoriteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.kategoriteService.remove(+id);
  }
}
