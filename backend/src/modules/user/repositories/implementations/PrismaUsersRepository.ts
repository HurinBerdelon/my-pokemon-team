import { User } from "@prisma/client";
import { prisma } from "../../../../services/prisma";
import { CreateUserDTO } from "../../DTO/CreateUserDTO";
import { IUsersRepository } from "../IUsersRepository";

export class PrismaUsersRepository implements IUsersRepository {

    private usersRepository = prisma.user

    async create({ name, providerId, imageUrl }: CreateUserDTO): Promise<void> {
        await this.usersRepository.create({
            data: {
                name,
                providerId,
                avatarURL: imageUrl,
                team: {
                    create: {}
                }
            }

        })
    }

    async findById(id: string): Promise<User> {
        const user = await this.usersRepository.findUnique({
            where: { id },
            include: {
                team: {
                    include: {
                        pokemons: {
                            include: {
                                pokemon: true
                            }
                        }
                    }
                }
            }
        })

        return user
    }

    async findByProviderId(providerId: string): Promise<User> {
        const user = await this.usersRepository.findUnique({
            where: { providerId },
            include: {
                team: {
                    include: {
                        pokemons: {
                            include: {
                                pokemon: true
                            }
                        }
                    }
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