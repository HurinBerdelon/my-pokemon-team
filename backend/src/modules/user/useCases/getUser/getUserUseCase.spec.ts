import 'reflect-metadata'
import { AppError } from '../../../../errors/AppError'
import { ErrorMessages } from '../../../../errors/ErrorMessages'
import { InMemoryUsersRepository } from '../../repositories/inMemory/InMemoryUsersRepository'
import { GetUserUseCase } from './getUserUseCase'

let usersRepositoryInMemory: InMemoryUsersRepository
let getUserUseCase: GetUserUseCase

describe('Get User UseCase', () => {

    beforeEach(() => {
        usersRepositoryInMemory = new InMemoryUsersRepository()
        getUserUseCase = new GetUserUseCase(
            usersRepositoryInMemory
        )
    })

    it('should be able to get authenticated user', async () => {

        const providerId = '3r-part-userId'

        await usersRepositoryInMemory.create({
            name: 'Name Test',
            providerId
        })

        const user = usersRepositoryInMemory.usersRepository.find(user => user.providerId === providerId)

        const result = await getUserUseCase.execute(user.id)

        expect(result).toHaveProperty('id')
    })

    it('should not be able to get user if it does not exists', async () => {
        await expect(
            getUserUseCase.execute('invalid-user-id')
        ).rejects.toEqual(new AppError(ErrorMessages.userNotFound, 404))
    })
})