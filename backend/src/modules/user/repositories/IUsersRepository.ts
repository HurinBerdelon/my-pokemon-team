import { User } from "@prisma/client";
import { CreateUserDTO } from "../DTO/CreateUserDTO";

export interface IUsersRepository {
    create({ name, providerId, imageUrl }: CreateUserDTO): Promise<void>
    findById(id: string): Promise<User>
    findByProviderId(providerId: string): Promise<User>
    updateAvatar(id: string, avatarURL: string): Promise<void>
    delete(id: string): Promise<void>
}