import { RefreshToken } from "@prisma/client"
import { CreateTokenDTO } from "../DTO/CreateTokenDTO"

export interface ITokenRepository {
    create({ expirationTime, userId, value }: CreateTokenDTO): Promise<void> //expirationTime in seconds
    findByUserId(userId: string): Promise<RefreshToken[]>
    findByValue(value: string): Promise<RefreshToken>
    delete(value: string): Promise<void>
}