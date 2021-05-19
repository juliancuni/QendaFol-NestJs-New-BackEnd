import { ApiProperty } from '@nestjs/swagger';

export class OldCeshtjeDto {
  @ApiProperty() id: string;
  @ApiProperty() oldid: number;
  @ApiProperty() emri: string;
  @ApiProperty() mbiemri: string;
  @ApiProperty() data_e_ngjarjes: Date;
  @ApiProperty() kategoria: string;
  @ApiProperty() sipas_nenit: string[];
  @ApiProperty() policia: string;
  @ApiProperty() prokuroria: string;
  @ApiProperty() sipas_nenit_p: string[];
  @ApiProperty() masa_e_sigurisë_kërkuar_nga_prokurori: string;
  @ApiProperty() data_vendimit_pr: Date;
  @ApiProperty() gjykata: string;
  @ApiProperty() hetimi: string;
  @ApiProperty() data_vedim_gjk: Date;
  @ApiProperty() gjygjtari_paraprak: string;
  @ApiProperty() neni_gjp: string[];
  @ApiProperty() data_gjygjtari_pr: Date;
  @ApiProperty() masa_e_sigurise_gjykata_shk1: string;
  @ApiProperty() data_mases_gjykates_shk1: Date;
  @ApiProperty() vendimi_gjykates_shk1: string;
  @ApiProperty() neni_gjsh1: string[];
  @ApiProperty() data_vendimit_gj_sh1: Date;
  @ApiProperty() vendimi_apelit: string;
  @ApiProperty() neni_apeli: string[];
  @ApiProperty() data_vendim_apeli: Date;
  @ApiProperty() masa_e_sigurisë_në_gjykatën_e_apelit: string;
  @ApiProperty() data_mas_sig_apeli: Date;
  @ApiProperty() vendim_gjykata_larte: string;
  @ApiProperty() data_gjykata_larte: Date;
  @ApiProperty() neni_gjl: string[];
  @ApiProperty() masa_e_sigurisë_në_gjykatën_e_larte: string;
  @ApiProperty() data_mas_sig_gj_larte: Date;
  @ApiProperty() komente: string;
}
