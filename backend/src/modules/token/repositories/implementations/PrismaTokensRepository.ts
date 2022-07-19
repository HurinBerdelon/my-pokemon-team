import { RefreshToken } from "@prisma/client";
import { prisma } from "../../../../services/prisma";
import { CreateTokenDTO } from "../../DTO/CreateTokenDTO";
import { ITokenRepository } from "../ITokenRepository";

export class PrismaTokensRepository implements ITokenRepository {

    private tokensRepository = prisma.refreshToken

    async create({ value, expirationTime, userId }: CreateTokenDTO): Promise<void> {
        await this.tokensRepository.create({
            data: {
                value,
                expirationTime,
                userId
            }
        })
    }

    async findByUserId(userId: string): Promise<RefreshToken[]> {
        const token = await this.tokensRepository.findMany({
            where: {
                userId
            }
        })

        return token
    }

    async findByValue(value: string): Promise<RefreshToken> {
        const token = await this.tokensRepository.findUnique({
            where: {
                value
            }
        })

        return token
    }

    async delete(value: string): Promise<void> {
        await this.tokensRepository.delete({
            where: { value }
        })
    }


}