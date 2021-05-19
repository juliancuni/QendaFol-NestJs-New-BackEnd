import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'old-ceshtjet' })
export class OldCeshtjet {
  @PrimaryGeneratedColumn('uuid') public id?: string;
  @Column({ nullable: true }) oldid: number;
  @Column({ nullable: true }) emri: string;
  @Column({ nullable: true }) mbiemri: string;
  @Column({ nullable: true }) data_e_ngjarjes: Date;
  @Column({ nullable: true }) kategoria: string;
  @Column("simple-array", { nullable: true }) sipas_nenit: string[];
  @Column("longtext", { nullable: true }) policia: string;
  @Column({ nullable: true }) prokuroria: string;
  @Column("simple-array", { nullable: true }) sipas_nenit_p: string[];
  @Column({ nullable: true }) masa_e_sigurisë_kërkuar_nga_prokurori: string;
  @Column({ nullable: true }) data_vendimit_pr: Date;
  @Column({ nullable: true }) gjykata: string;
  @Column({ nullable: true }) hetimi: string;
  @Column({ nullable: true }) data_vedim_gjk: Date;
  @Column({ nullable: true }) gjygjtari_paraprak: string;
  @Column("simple-array", { nullable: true }) neni_gjp: string[];
  @Column({ nullable: true }) data_gjygjtari_pr: Date;
  @Column({ nullable: true }) masa_e_sigurise_gjykata_shk1: string;
  @Column({ nullable: true }) data_mases_gjykates_shk1: Date;
  @Column({ nullable: true }) vendimi_gjykates_shk1: string;
  @Column("simple-array", { nullable: true }) neni_gjsh1: string[];
  @Column({ nullable: true }) data_vendimit_gj_sh1: Date;
  @Column({ nullable: true }) vendimi_apelit: string;
  @Column("simple-array", { nullable: true }) neni_apeli: string[];
  @Column({ nullable: true }) data_vendim_apeli: Date;
  @Column({ nullable: true }) masa_e_sigurisë_në_gjykatën_e_apelit: string;
  @Column({ nullable: true }) data_mas_sig_apeli: Date;
  @Column({ nullable: true }) vendim_gjykata_larte: string;
  @Column({ nullable: true }) data_gjykata_larte: Date;
  @Column("simple-array", { nullable: true }) neni_gjl: string[];
  @Column({ nullable: true }) masa_e_sigurisë_në_gjykatën_e_larte: string;
  @Column({ nullable: true }) data_mas_sig_gj_larte: Date;
  @Column("longtext", { nullable: true }) komente: string;
}
