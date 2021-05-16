import { Kategoria } from "src/resources/kategorite/entities/kategorite.entity";
import { Komenti } from "src/resources/komenti/entities/komenti.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'ceshtjet' })
export class Ceshtja {
    @PrimaryGeneratedColumn('uuid') public id: string;
    @Column() data_e_ngjarjes: string;
    //TODO Vendi ku ka ndodhur ngjarja
    @ManyToOne(() => Kategoria, kategoria => kategoria.ceshtjet) kategoria: Kategoria;
    @OneToMany(() => Komenti, komentet => komentet.ceshtja) komentet: Komenti;
    @CreateDateColumn({ name: 'created_at' }) 'created_at': Date;
    @UpdateDateColumn({ name: 'updated_at' }) 'updated_at': Date;
}
