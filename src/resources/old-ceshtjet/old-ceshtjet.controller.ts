import {
  Body,
  Controller,
  Delete,
  Get,
  HttpService,
  Inject,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import {
  Resource,
  Unprotected,
  Scopes,
} from 'nest-keycloak-connect';
import { DeleteResult, UpdateResult } from 'typeorm';
import { OldCeshtjeDto } from './dto/create-old-ceshtjet.dto';
import { OldCeshtjet } from './entity/old-ceshtje.entity';
// import { OldCeshtjet } from './entity/old-ceshtje.entity';
import { OldCeshtjetServiceInterface } from './interface/old-ceshtjet.service.interface';

@ApiTags('old-ceshtjet')
@Controller('old-ceshtjet')
// @Resource('old-ceshtjet')
export class OldCeshtjetController {
  constructor(
    @Inject('OldCeshtjetServiceInterface')
    private readonly _oldCeshtjetService: OldCeshtjetServiceInterface,
    private readonly _httpService: HttpService,
  ) { }

  @Get()
  @Unprotected()
  public async findAll(): Promise<OldCeshtjeDto[]> {
    return await this._oldCeshtjetService.findAll();
  }
  @Get(':id')
  //@ApiBearerAuth('access-token')
  @Unprotected()
  @Scopes('View')
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
  @Post()
  //@ApiBearerAuth('access-token')
  @Unprotected()
  public async create(
    @Body() oldCeshtjetDto: OldCeshtjeDto,
  ): Promise<OldCeshtjeDto> {
    return await this._oldCeshtjetService.create(oldCeshtjetDto);
  }
  @Patch('update')
  //@ApiBearerAuth('access-token')
  @Unprotected()
  public async updateOne(
    @Body() oldCeshtje: OldCeshtjeDto,
  ): Promise<UpdateResult> {
    return this._oldCeshtjetService.update(oldCeshtje as any);
  }
  @Delete(':id')
  //@ApiBearerAuth('access-token')
  @Unprotected()
  public async remove(@Param('id') id: string): Promise<DeleteResult> {
    let result;
    try {
      result = await this._oldCeshtjetService.remove(id);
    } catch (error) {
      throw new NotFoundException('Nuk u fshi asnje rekord');
    }
    return result;
  }
  //@ApiBearerAuth('access-token')
  @Unprotected()
  @Post('bulk')
  public async bulkInsert(@Body() oldCeshtjet: OldCeshtjet[]) {
    return this._oldCeshtjetService.bulk(oldCeshtjet);
  }

  @Post('login/:username/:password')
  @Unprotected()
  public async loginToKeyCloak(
    @Param('username') username: string,
    @Param('password') password: string,
  ) {
    const tokenUrl =
      'http://localhost:8080/auth/realms/qendrafol/protocol/openid-connect/token';
    const body = {
      client_id: 'qendrafol-webapp',
      username: username,
      password: password,
      grant_type: 'password',
    };
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };
    const formBodyEncoded = [];
    for (const prop in body) {
      const encodedKey = encodeURIComponent(prop);
      const encodeBody = encodeURIComponent(body[prop]);
      formBodyEncoded.push(encodedKey + '=' + encodeBody);
    }
    const formBodyEncodedString = formBodyEncoded.join('&');
    const response = await this._httpService
      .post(tokenUrl, formBodyEncodedString, config)
      .toPromise();
    return response.data;
  }
}
