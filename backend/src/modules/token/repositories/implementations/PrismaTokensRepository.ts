import { RefreshToken } from "@prisma/client";
import { prisma } from "../../../../services/prisma";
import { ITokenRepository } from "../ITokenRepository";

export class PrismaTokensRepository implements ITokenRepository {

    private tokensRepository = prisma.refreshToken

    async create(value: string, expirationTime: number, userId: string): Promise<void> {
        await this.tokensRepository.create({
            data: {
                value,
                expirationTime,
                userId
            }
        })
    }

    async findByUserId(userId: string): Promise<RefreshToken> {
        const token = await this.tokensRepository.findUnique({
            where: {
                userId
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