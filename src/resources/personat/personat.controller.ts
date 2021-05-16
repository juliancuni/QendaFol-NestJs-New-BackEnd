import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PersonatDto } from './dto/personat.dto';
import { PersonatService } from './personat.service';

@Controller('personat')
export class PersonatController {
  constructor(private readonly personatService: PersonatService) {}

  @Post()
  create(@Body() personatDto: PersonatDto) {
    return this.personatService.create(personatDto);
  }

  @Get()
  findAll() {
    return this.personatService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personatService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() personatDto: PersonatDto) {
    return this.personatService.update(+id, personatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personatService.remove(+id);
  }
}
