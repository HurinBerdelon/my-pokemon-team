import dayjs from 'dayjs'
import 'reflect-metadata'
import { AppError } from '../../../../errors/AppError'
import { ErrorMessages } from '../../../../errors/ErrorMessages'
import { InMemoryTokenRepository } from '../../repositories/inMemory/InMemoryTokensRepository'
import { DeleteTokenUseCase } from './deleteTokenUseCase'

let tokensRepositoryInMemory: InMemoryTokenRepository
let deleteTokenUseCase: DeleteTokenUseCase

describe('Delete User', () => {

    beforeEach(() => {
        tokensRepositoryInMemory = new InMemoryTokenRepository()
        deleteTokenUseCase = new DeleteTokenUseCase(
            tokensRepositoryInMemory
        )
    })

    it('should be able to delete a token', async () => {

        tokensRepositoryInMemory.tokensRepository.push({
            value: 'hashed-value',
            expiresAt: dayjs().add(15 * 60, 'seconds').toDate(), // = 15 minutes
            userId: 'user.id',
            createdAt: new Date()
        })

        await deleteTokenUseCase.execute('hashed-value')

        expect(tokensRepositoryInMemory.tokensRepository.length).toEqual(0)
    })

    it('should not be able to delete an unexistent token', async () => {
        await expect(
            deleteTokenUseCase.execute('non-existent_id')
        ).rejects.toEqual(new AppError(ErrorMessages.tokenNotFound, 404))
    })

})