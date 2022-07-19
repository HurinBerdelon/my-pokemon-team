import { RefreshToken } from "@prisma/client";
import { CreateTokenDTO } from "../../DTO/CreateTokenDTO";
import { ITokenRepository } from "../ITokenRepository";

export class InMemoryTokenRepository implements ITokenRepository {

    tokensRepository: RefreshToken[] = []

    async create({ value, expirationTime, userId }: CreateTokenDTO): Promise<void> {
        this.tokensRepository.push({
            value,
            userId,
            expirationTime,
            createdAt: new Date()
        })
    }

    async findByValue(value: string): Promise<RefreshToken> {
        return this.tokensRepository.find(token => token.value === value)
    }

    async findByUserId(userId: string): Promise<RefreshToken[]> {
        return this.tokensRepository.filter(token => token.userId === userId)
    }

    async delete(value: string): Promise<void> {
        const tokenIndex = this.tokensRepository.findIndex(token => token.value === value)
        this.tokensRepository.splice(tokenIndex, 1)
    }


}