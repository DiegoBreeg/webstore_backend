import { User } from "../entities/User"

export interface UserRepository
{
    save(entity: User): Promise<User>
    findById(id: string): Promise<User> | null
    findAll(): Promise<User[]>
    update(entity: User): Promise<void>
    deleteById(id: string): Promise<void>
}
