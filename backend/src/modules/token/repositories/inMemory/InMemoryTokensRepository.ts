import { RefreshToken } from "@prisma/client";
import { ITokenRepository } from "../ITokenRepository";

export class InMemoryTokenRepository implements ITokenRepository {

    tokensRepository: RefreshToken[] = []

    async create(value: string, expirationTime: number, userId: string): Promise<void> {
        this.tokensRepository.push({
            value,
            userId,
            expirationTime,
            createdAt: new Date()
        })
    }

    async findByUserId(userId: string): Promise<RefreshToken> {
        return this.tokensRepository.find(token => token.userId === userId)
    }

    async delete(value: string): Promise<void> {
        const tokenIndex = this.tokensRepository.findIndex(token => token.value === value)
        this.tokensRepository.splice(tokenIndex, 1)
    }


}