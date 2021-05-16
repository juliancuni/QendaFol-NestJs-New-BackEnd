import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'old-ceshtjet' })
export class OldCeshtjet {
  @PrimaryGeneratedColumn('uuid') public id: string;
  @Column() emri: string;
  @Column() mbiemri: string;
  @Column() data_e_ngjarjes: Date;
  @Column() kategoria: string;
  @Column() sipas_Nenit: string;
  @Column() policia: string;
  @Column() prokuroria: string;
  @Column() sipas_Nenit_P: string;
  @Column() masa_e_sigurisë_kërkuar_nga_Prokurori: string;
  @Column() data_Vendimit_Pr: Date;
  @Column() gjykata: string;
  @Column() hetimi: string;
  @Column() data_Vedim_Gjk: Date;
  @Column() gjygjtari_paraprak: string;
  @Column() neni_GJP: string;
  @Column() data_Gjygjtari_pr: Date;
  @Column() masa_e_sigurise_Gjykata_Shk1: string;
  @Column() data_mases_Gjykates_Shk1: Date;
  @Column() vendimi_Gjykates_Shk1: string;
  @Column() neni_GJSH1: string;
  @Column() data_Vendimit_GJ_SH1: Date;
  @Column() vendimi_Apelit: string;
  @Column() neni_Apeli: string;
  @Column() data_Vendim_Apeli: Date;
  @Column() masa_e_sigurisë_në_Gjykatën_e_Apelit: string;
  @Column() data_mas_sig_Apeli: Date;
  @Column() vendim_Gjykata_Larte: string;
  @Column() data_Gjykata_Larte: Date;
  @Column() neni_GJL: string;
  @Column() masa_e_sigurisë_në_Gjykatën_e_Larte: string;
  @Column() data_mas_sig_Gj_Larte: Date;
  @Column() komente: string;
}
