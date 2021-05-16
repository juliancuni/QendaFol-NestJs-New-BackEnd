import { Injectable } from '@nestjs/common';
import { CreateKategoriteDto } from './dto/create-kategorite.dto';
import { UpdateKategoriteDto } from './dto/update-kategorite.dto';

@Injectable()
export class KategoriteService {
  create(createKategoriteDto: CreateKategoriteDto) {
    return 'This action adds a new kategorite';
  }

  findAll() {
    return `This action returns all kategorite`;
  }

  findOne(id: number) {
    return `This action returns a #${id} kategorite`;
  }

  update(id: number, updateKategoriteDto: UpdateKategoriteDto) {
    return `This action updates a #${id} kategorite`;
  }

  remove(id: number) {
    return `This action removes a #${id} kategorite`;
  }
}
