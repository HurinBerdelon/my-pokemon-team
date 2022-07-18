import { RefreshToken } from "@prisma/client"

export interface ITokenRepository {
    create(value: string, expirationTime: number, userId: string): Promise<void> //expirationTime in seconds
    findByUserId(userId: string): Promise<RefreshToken>
    delete(value: string): Promise<void>
}