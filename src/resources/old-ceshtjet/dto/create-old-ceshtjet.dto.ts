import { ApiProperty } from '@nestjs/swagger';

export class OldCeshtjeDto {
  @ApiProperty() emri: string;
  @ApiProperty() mbiemri: string;
  @ApiProperty() data_e_ngjarjes: Date;
  @ApiProperty() kategoria: string;
  @ApiProperty() sipas_Nenit: string;
  @ApiProperty() policia: string;
  @ApiProperty() prokuroria: string;
  @ApiProperty() sipas_Nenit_P: string;
  @ApiProperty() masa_e_sigurisë_kërkuar_nga_Prokurori: string;
  @ApiProperty() data_Vendimit_Pr: Date;
  @ApiProperty() gjykata: string;
  @ApiProperty() hetimi: string;
  @ApiProperty() data_Vedim_Gjk: Date;
  @ApiProperty() gjygjtari_paraprak: string;
  @ApiProperty() neni_GJP: string;
  @ApiProperty() data_Gjygjtari_pr: Date;
  @ApiProperty() masa_e_sigurise_Gjykata_Shk1: string;
  @ApiProperty() data_mases_Gjykates_Shk1: Date;
  @ApiProperty() vendimi_Gjykates_Shk1: string;
  @ApiProperty() neni_GJSH1: string;
  @ApiProperty() data_Vendimit_GJ_SH1: Date;
  @ApiProperty() vendimi_Apelit: string;
  @ApiProperty() neni_Apeli: string;
  @ApiProperty() data_Vendim_Apeli: Date;
  @ApiProperty() masa_e_sigurisë_në_Gjykatën_e_Apelit: string;
  @ApiProperty() data_mas_sig_Apeli: Date;
  @ApiProperty() vendim_Gjykata_Larte: string;
  @ApiProperty() data_Gjykata_Larte: Date;
  @ApiProperty() neni_GJL: string;
  @ApiProperty() masa_e_sigurisë_në_Gjykatën_e_Larte: string;
  @ApiProperty() data_mas_sig_Gj_Larte: Date;
  @ApiProperty() komente: string;
}
