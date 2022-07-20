import { User } from "@prisma/client";
import { prisma } from "../../../../services/prisma";
import { CreateUserDTO } from "../../DTO/CreateUserDTO";
import { IUsersRepository } from "../IUsersRepository";

export class PrismaUsersRepository implements IUsersRepository {

    private usersRepository = prisma.user

    async create({ name, providerId }: CreateUserDTO): Promise<void> {
        await this.usersRepository.create({
            data: {
                name,
                providerId,
                team: {
                    create: {}
                }
            }

        })
    }

    async findById(id: string): Promise<User> {
        const user = await this.usersRepository.findUnique({
            where: { id }
        })

        return user
    }

    async findByProviderId(providerId: string): Promise<User> {
        const user = await this.usersRepository.findUnique({
            where: { providerId },
            include: {
                team: {
                    // include: {
                    //     pokemons: true
                    // }
                }
            }
        })

        return user
    }

    async updateAvatar(id: string, avatarURL: string): Promise<void> {
        await this.usersRepository.update({
            where: { id },
            data: { avatarURL }
        })
    }

    async delete(id: string): Promise<void> {
        await this.usersRepository.delete({
            where: { id }
        })
    }
}