import { RefreshToken } from "@prisma/client";
import dayjs from "dayjs";
import { CreateTokenDTO } from "../../DTO/CreateTokenDTO";
import { ITokenRepository } from "../ITokenRepository";

export class InMemoryTokenRepository implements ITokenRepository {

    tokensRepository: RefreshToken[] = []

    async create({ value, expiresAt, userId }: CreateTokenDTO): Promise<RefreshToken> {
        this.tokensRepository.push({
            value,
            userId,
            expiresAt,
            createdAt: new Date()
        })

        return this.tokensRepository.find(token => token.value === value)
    }

    async findByValue(value: string): Promise<RefreshToken> {
        return this.tokensRepository.find(token => token.value === value)
    }

    // async findByUserId(userId: string): Promise<RefreshToken[]> {
    //     return this.tokensRepository.filter(token => token.userId === userId)
    // }

    async delete(value: string): Promise<void> {
        const tokenIndex = this.tokensRepository.findIndex(token => token.value === value)
        this.tokensRepository.splice(tokenIndex, 1)
    }

    async deleteExpired(userId: string): Promise<void> {

        const userTokens = this.tokensRepository.filter(token => token.userId === userId)

        const invalidTokens = userTokens.map(token => {
            // for each token of user, check if it is expired, if yes, delete it
            if (token.expiresAt < dayjs().toDate()) {
                return token
            }
        }).filter(token => token !== undefined)

        invalidTokens.map(token => {
            const index = this.tokensRepository.indexOf(token)
            this.tokensRepository.splice(index, 1)
        })
    }
}