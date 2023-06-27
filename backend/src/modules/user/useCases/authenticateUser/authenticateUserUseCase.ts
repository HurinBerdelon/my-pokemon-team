import { Pokemon, RefreshToken, User } from '@prisma/client';
import { hash } from 'bcrypt';
import dayjs from 'dayjs';
import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';
import { v4 as uuidv4 } from 'uuid'
import envConfig from '../../../../config/envConfig';
import { ITokenRepository } from '../../../token/repositories/ITokenRepository';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IResponse {
    user: User
    accessToken: string
    refreshToken: RefreshToken
}

@injectable()
export class AuthenticateUserUseCase {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,
        @inject('TokensRepository')
        private tokensRepository: ITokenRepository
    ) { }

    async execute(providerId: string, name: string, imageUrl = undefined): Promise<IResponse> {

        let user = await this.usersRepository.findByProviderId(providerId)

        if (!user) {
            await this.usersRepository.create({ name, providerId, imageUrl })
            user = await this.usersRepository.findByProviderId(providerId)
        }

        const accessToken = sign({}, envConfig.JWT_SECRET, {
            subject: user.id,
            expiresIn: envConfig.JWT_expiration
        })

        await this.tokensRepository.deleteExpired(user.id)

        const refreshTokenValue = await hash(uuidv4(), envConfig.hashRounds)

        const refreshToken = await this.tokensRepository.create({
            expiresAt: dayjs().add(envConfig.RefreshToken_expires_seconds, 'seconds').toDate(),
            userId: user.id,
            value: refreshTokenValue
        })

        const response: IResponse = {
            user,
            accessToken,
            refreshToken
        }

        return response
    }
}