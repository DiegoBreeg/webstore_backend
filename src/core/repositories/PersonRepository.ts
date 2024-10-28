import { Person } from "../entities/Person"

export interface PersonRepository
{
    save(entity: Person): Promise<Person>
    findById(id: string): Promise<Person> | null
    findAll(): Promise<Person[]>
    update(entity: Person): Promise<void>
    deleteById(id: string): Promise<void>
}
