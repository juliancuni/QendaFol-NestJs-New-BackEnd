import { Injectable } from '@nestjs/common';
import { PersonatDto } from './dto/personat.dto';

@Injectable()
export class PersonatService {
  create(personatDto: PersonatDto) {
    return 'This action adds a new personat';
  }

  findAll() {
    return `This action returns all personat`;
  }

  findOne(id: number) {
    return `This action returns a #${id} personat`;
  }

  update(id: number, personatDto: PersonatDto) {
    return `This action updates a #${id} personat`;
  }

  remove(id: number) {
    return `This action removes a #${id} personat`;
  }
}
