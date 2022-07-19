import { RefreshToken } from "@prisma/client"
import { CreateTokenDTO } from "../DTO/CreateTokenDTO"

export interface ITokenRepository {
    create({ expiresAt, userId, value }: CreateTokenDTO): Promise<RefreshToken> //expirationTime in seconds
    findByUserId(userId: string): Promise<RefreshToken[]>
    findByValue(value: string): Promise<RefreshToken>
    delete(value: string): Promise<void>
    deleteExpired(userId: string): Promise<void>
}