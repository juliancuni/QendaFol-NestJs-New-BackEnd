import { Ceshtja } from "src/resources/ceshtjet/entities/ceshtjet.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('komentet')
export class Komenti {
    @PrimaryGeneratedColumn('uuid') public id: string;
    @Column() koment: string;
    @Column() userId: string;
    @ManyToOne(() => Ceshtja, ceshtja => ceshtja.komentet) ceshtja: Ceshtja;
    @CreateDateColumn({ name: 'created_at' }) 'created_at': Date;
    @UpdateDateColumn({ name: 'updated_at' }) 'updated_at': Date;
}
