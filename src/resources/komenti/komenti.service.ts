import { Injectable } from '@nestjs/common';
import { CreateKomentiDto } from './dto/create-komenti.dto';
import { UpdateKomentiDto } from './dto/update-komenti.dto';

@Injectable()
export class KomentiService {
  create(createKomentiDto: CreateKomentiDto) {
    return 'This action adds a new komenti';
  }

  findAll() {
    return `This action returns all komenti`;
  }

  findOne(id: number) {
    return `This action returns a #${id} komenti`;
  }

  update(id: number, updateKomentiDto: UpdateKomentiDto) {
    return `This action updates a #${id} komenti`;
  }

  remove(id: number) {
    return `This action removes a #${id} komenti`;
  }
}
