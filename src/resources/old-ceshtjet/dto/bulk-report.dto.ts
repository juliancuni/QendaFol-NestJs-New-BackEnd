import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('bulk-reports')
export class BulkReportDto {
    @PrimaryGeneratedColumn('uuid') id: string;
    @Column() nrImportedSuccess: number;
    @Column() nrUpdatedSuccess: number;
    @Column() nrImportedFailure: number;
    @Column() nrUpdatedFailure: number;
    @Column() importFailedoldids: number[];
    @Column() updateFailedoldids: number[];
    @Column() username: string;
    @CreateDateColumn({ name: 'created_at' }) 'created_at': Date;
}