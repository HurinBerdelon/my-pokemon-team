import 'reflect-metadata'
import { sign } from "jsonwebtoken"

import { AppError } from "../../../../errors/AppError"
import { ErrorMessages } from '../../../../errors/ErrorMessages'
import { InMemoryTokenRepository } from '../../../token/repositories/inMemory/InMemoryTokensRepository'
import { InMemoryUsersRepository } from '../../repositories/inMemory/InMemoryUsersRepository'
import { RefreshUserUseCase } from './refreshUserUseCase'
import envConfig from '../../../../config/envConfig'
import dayjs from 'dayjs'

let refreshTokenRepositoryInMemory: InMemoryTokenRepository
let usersRepositoryInMemory: InMemoryUsersRepository
let refreshUserUseCase: RefreshUserUseCase

describe('Create refresh Token', () => {

    beforeEach(() => {
        refreshTokenRepositoryInMemory = new InMemoryTokenRepository()
        usersRepositoryInMemory = new InMemoryUsersRepository()
        refreshUserUseCase = new RefreshUserUseCase(usersRepositoryInMemory, refreshTokenRepositoryInMemory)
    })

    it('should be able to create a new refresh token if a refresh token already exists', async () => {

        const providerId = '3rd-part-userId'
        const name = 'userNameTest'

        await usersRepositoryInMemory.create({ name, providerId })

        const user = await usersRepositoryInMemory.findByProviderId(providerId)

        const accessToken = sign({}, envConfig.JWT_SECRET, {
            subject: user.id,
            expiresIn: envConfig.JWT_expiration
        })

        const refreshToken = await refreshTokenRepositoryInMemory.create({
            value: 'valid_refresh_token',
            expiresAt: dayjs().add(60 * 15, 'seconds').toDate(),  // 15 minutes
            userId: user.id,
        })

        const refreshUser = await refreshUserUseCase.execute({
            accessToken,
            refreshTokenValue: refreshToken.value
        })

        expect(refreshUser).toHaveProperty('accessToken')
        expect(refreshUser).toHaveProperty('refreshToken')
        expect(refreshUser).toHaveProperty('user')

    })

    it('should not be able to create a refresh token for an invalid access token', async () => {

        const invalidAccessToken = sign({}, envConfig.JWT_SECRET, {
            subject: 'invalid-userId',
            expiresIn: envConfig.JWT_expiration
        })

        await expect(
            refreshUserUseCase.execute({
                refreshTokenValue: 'valid_refresh_token',
                accessToken: invalidAccessToken
            })).rejects.toEqual(new AppError(ErrorMessages.userNotFound, 404))
    })

    it('should not be able to create a new refresh token if old one is expired', async () => {
        const providerId = '3rd-part-userId'
        const name = 'userNameTest'

        await usersRepositoryInMemory.create({ name, providerId })

        const user = await usersRepositoryInMemory.findByProviderId(providerId)

        const accessToken = sign({}, envConfig.JWT_SECRET, {
            subject: user.id,
            expiresIn: envConfig.JWT_expiration
        })

        await refreshTokenRepositoryInMemory.create({
            value: 'valid_refresh_token',
            expiresAt: dayjs().add(-60 * 15, 'seconds').toDate(),  // 15 minutes
            userId: user.id,
        })

        await expect(
            refreshUserUseCase.execute({
                refreshTokenValue: 'valid_refresh_token',
                accessToken: accessToken
            })).rejects.toEqual(new AppError(ErrorMessages.tokenNotFound, 404))
    })

    it('should not be able to create a new token if there was no old refreshToken', async () => {
        const providerId = '3rd-part-userId'
        const name = 'userNameTest'

        await usersRepositoryInMemory.create({ name, providerId })

        const user = await usersRepositoryInMemory.findByProviderId(providerId)

        const accessToken = sign({}, envConfig.JWT_SECRET, {
            subject: user.id,
            expiresIn: envConfig.JWT_expiration
        })

        await expect(
            refreshUserUseCase.execute({
                refreshTokenValue: 'inexistent_refresh_token',
                accessToken: accessToken
            })).rejects.toEqual(new AppError(ErrorMessages.tokenNotFound, 401))
    })
})