import { DeleteResult } from "typeorm";

export interface BaseInterfaceRepository<T> {
    create(data: T | any): Promise<T>;
    findByCondition(filterCondition: any): Promise<T[]>;
    findOneById(id: string): Promise<T>;
    findAll(): Promise<T[]>;
    remove(id: string): Promise<DeleteResult>;
    findWithRelations(relations: any): Promise<T[]>;
}