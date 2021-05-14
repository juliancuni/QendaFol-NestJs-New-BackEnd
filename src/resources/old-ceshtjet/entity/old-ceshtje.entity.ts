import {
  Column,
  CreateDateColumn,
  Entity,
  // ObjectIdColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'old-ceshtjet' })
export class OldCeshtjet {
  // @ObjectIdColumn() id: string;
  @PrimaryGeneratedColumn('uuid') public id: string;
  // @Column({ type: 'string', unique: false }) emri: string;
  @Column() emri: string;
  // @Column({ type: 'string', unique: false }) mbiemri: string;
  @Column() mbiemri: string;
  // @Column({ type: 'date' }) createdAt: any;
  @CreateDateColumn() createdAt: any;
}
