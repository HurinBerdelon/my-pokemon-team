import { Team } from "@prisma/client"

export interface CreateUserDTO {
    providerId: string
    name: string
    team: Team
    // avatarURL: string
    // refreshToken: RefreshToken
}