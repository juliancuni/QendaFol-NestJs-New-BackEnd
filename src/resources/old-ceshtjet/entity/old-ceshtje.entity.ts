import { Column, Entity, ObjectIdColumn } from "typeorm";

@Entity({ name: 'old-ceshtjet' })
export class OldCeshtjet {
    @ObjectIdColumn() id: string;
    @Column({ type: 'string', unique: false }) emri: string;
    @Column({ type: 'string', unique: false }) mbiemri: string;
    @Column({ type: 'date' }) createdAt: any;
}