import { RefreshToken, User } from '@prisma/client';
import { hash } from 'bcrypt';
import { v4 as uuidv4 } from 'uuid'
import dayjs from 'dayjs';
import { sign, verify, decode } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';
import envConfig from '../../../../config/envConfig';
import { AppError } from '../../../../errors/AppError';
import { ErrorMessages } from '../../../../errors/ErrorMessages';
import { ITokenRepository } from '../../../token/repositories/ITokenRepository';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IResponse {
    user: User
    accessToken: string
    refreshToken: RefreshToken
}

@injectable()
export class RefreshUserUseCase {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,
        @inject('TokensRepository')
        private tokensRepository: ITokenRepository
    ) { }

    async execute({ accessToken, refreshTokenValue }): Promise<IResponse> {

        const { sub: userId } = decode(accessToken) as { sub: string }

        const user = await this.usersRepository.findById(userId)

        if (!user) {
            throw new AppError(ErrorMessages.userNotFound, 404)
        }

        const oldRefreshToken = await this.tokensRepository.findByValue(refreshTokenValue)

        if (!oldRefreshToken) {
            throw new AppError(ErrorMessages.tokenNotFound, 401)
        }

        // if (oldRefreshToken.userId != user.id) {
        //     throw new AppError(ErrorMessages.tokenNotFound, 404)
        // }

        if (oldRefreshToken.expiresAt < dayjs().toDate()) {
            throw new AppError(ErrorMessages.tokenNotFound, 404)
        }

        await this.tokensRepository.delete(oldRefreshToken.value)

        const refreshToken = await this.tokensRepository.create({
            value: await hash(uuidv4(), envConfig.hashRounds),
            expiresAt: dayjs().add(envConfig.RefreshToken_expires_seconds, 'seconds').toDate(),
            userId: user.id
        })

        const newAccessToken = sign({}, envConfig.JWT_SECRET, {
            subject: userId,
            expiresIn: envConfig.JWT_expiration
        })

        return {
            user,
            accessToken: newAccessToken,
            refreshToken
        }
    }
}