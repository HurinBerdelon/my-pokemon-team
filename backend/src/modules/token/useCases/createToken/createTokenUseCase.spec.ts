import dayjs from 'dayjs'
import 'reflect-metadata'
import { AppError } from '../../../../errors/AppError'
import { ErrorMessages } from '../../../../errors/ErrorMessages'
import { InMemoryTokenRepository } from '../../repositories/inMemory/InMemoryTokensRepository'
import { CreateTokenUseCase } from './createTokenUseCase'

let tokensRepositoryInMemory: InMemoryTokenRepository
let createTokenUseCase: CreateTokenUseCase

describe('Create User', () => {

    beforeEach(() => {
        tokensRepositoryInMemory = new InMemoryTokenRepository()
        createTokenUseCase = new CreateTokenUseCase(
            tokensRepositoryInMemory
        )
    })

    it('should be able to create a new token', async () => {

        const token = {
            value: 'hashed-value',
            expiresAt: dayjs().add(60 * 15, 'seconds').toDate(), // = 15 minutes
            userId: 'user.id'
        }

        await createTokenUseCase.execute(token)

        expect(tokensRepositoryInMemory.tokensRepository.length).toEqual(1)
    })

    it('should not be able to create a token if its value already exists', async () => {
        const token = {
            value: 'hashed-value',
            expiresAt: dayjs().add(60 * 15, 'seconds').toDate(), // = 15 minutes
            userId: 'user.id'
        }

        await createTokenUseCase.execute(token)

        await expect(
            createTokenUseCase.execute(token)
        ).rejects.toEqual(new AppError(ErrorMessages.tokenAlreadyExists))
    })
})