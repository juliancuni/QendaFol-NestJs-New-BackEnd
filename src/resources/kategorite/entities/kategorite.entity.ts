import { Ceshtja } from "src/resources/ceshtjet/entities/ceshtjet.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'kategorite' })
export class Kategoria {
    @PrimaryGeneratedColumn('uuid') public id: string;
    @Column() emri: string;
    @OneToMany(() => Ceshtja, ceshtja => ceshtja.kategoria) ceshtjet: Ceshtja;
}
