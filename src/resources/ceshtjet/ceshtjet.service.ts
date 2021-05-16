import { Injectable } from '@nestjs/common';
import { CeshtjetDto } from './dto/ceshtjet.dto';

@Injectable()
export class CeshtjetService {
  create(ceshtjetDto: CeshtjetDto) {
  return 'This action adds a new ceshtjet';
  }

  findAll() {
    return `This action returns all ceshtjet`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ceshtjet`;
  }

  update(id: number, ceshtjetDto: CeshtjetDto) {
    return `This action updates a #${id} ceshtjet`;
  }

  remove(id: number) {
    return `This action removes a #${id} ceshtjet`;
  }
}
