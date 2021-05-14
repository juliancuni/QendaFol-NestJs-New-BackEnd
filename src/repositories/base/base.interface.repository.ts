import { DeleteResult, UpdateResult } from "typeorm";

export interface BaseInterfaceRepository<T> {
    save(data: T | any): Promise<T>;
    findByCondition(filterCondition: any): Promise<T[]>;
    findOneById(id: string): Promise<T>;
    findAll(): Promise<T[]>;
    findWithRelations(relations: any): Promise<T[]>;
    remove(id: string): Promise<DeleteResult>;
}