import 'reflect-metadata'
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
            expirationTime: 15 * 60, // = 15 minutes
            userId: 'user.id'
        }

        await createTokenUseCase.execute(token)

        expect(tokensRepositoryInMemory.tokensRepository.length).toEqual(1)
    })
})