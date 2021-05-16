import { Ceshtja } from "src/resources/ceshtjet/entities/ceshtjet.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('personat')
export class Personi {
    @PrimaryGeneratedColumn('uuid') id: string;
    @Column() emer: string;
    @Column() mbiemer: string;
    @Column() atesia: string;
    @Column() datelindja: Date;
    @Column() gjinia: string;
    @Column() vendlindja: string;
    @Column() vendbanimi: string;
    @ManyToMany(() => Ceshtja) @JoinTable() ceshtjet: Ceshtja[];
}
