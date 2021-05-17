import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('bulk-reports')
export class BulkReportDto {
    @PrimaryGeneratedColumn('uuid') id: string;
    @Column() nrImportedSuccess: number;
    @Column() nrImportedFailure: number;
    @Column() importFailedoldids: number[];
    @Column() username: string;
    @CreateDateColumn({ name: 'created_at' }) 'created_at': Date;
    // constructor(nrImportedSuccess: number,nrImportedFailure: number, importFailedoldids: number[], username: string) {
    //     this.nrImportedSuccess = nrImportedSuccess;
    //     this.nrImportedFailure = nrImportedFailure;
    //     this.importFailedoldids = importFailedoldids;
    //     this.username = username;
    // }
}