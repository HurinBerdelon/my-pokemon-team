import { User } from "@prisma/client";
import { v4 as uuidv4 } from 'uuid'
import { CreateUserDTO } from "../../DTO/CreateUserDTO";
import { IUsersRepository } from "../IUsersRepository";

export class InMemoryUsersRepository implements IUsersRepository {

    usersRepository: User[] = []

    async create({ name, providerId }: CreateUserDTO): Promise<void> {
        this.usersRepository.push({
            id: uuidv4(),
            name,
            providerId,
            avatarURL: null,
            createdAt: new Date(),
            updatedAt: new Date()

        })
    }

    async findById(id: string): Promise<User> {
        const user = this.usersRepository.find(user => user.id === id)

        return user
    }

    async findByProviderId(providerId: string): Promise<User> {
        const user = this.usersRepository.find(user => user.providerId === providerId)

        return user
    }

    async updateAvatar(id: string, avatarURL: string): Promise<void> {
        const user = this.usersRepository.find(user => user.id === id)
        const userIndex = this.usersRepository.indexOf(user)

        this.usersRepository.splice(userIndex, 1, { ...user, avatarURL })
    }

    async delete(id: string): Promise<void> {
        const userIndex = this.usersRepository.findIndex(user => user.id === id)
        this.usersRepository.splice(userIndex, 1)
    }


}