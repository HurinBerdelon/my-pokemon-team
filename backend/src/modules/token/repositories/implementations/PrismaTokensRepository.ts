import { RefreshToken } from "@prisma/client";
import dayjs from "dayjs";
import { prisma } from "../../../../services/prisma";
import { CreateTokenDTO } from "../../DTO/CreateTokenDTO";
import { ITokenRepository } from "../ITokenRepository";

export class PrismaTokensRepository implements ITokenRepository {

    private tokensRepository = prisma.refreshToken

    async create({ value, expiresAt, userId }: CreateTokenDTO): Promise<RefreshToken> {
        return await this.tokensRepository.create({
            data: {
                value,
                expiresAt,
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

    async deleteExpired(userId: string): Promise<void> {
        const userTokens = await this.tokensRepository.findMany({ where: { userId } })

        userTokens.map(token => {
            if (token.expiresAt < dayjs().toDate()) {
                this.delete(token.value)
            }
        })
    }
}