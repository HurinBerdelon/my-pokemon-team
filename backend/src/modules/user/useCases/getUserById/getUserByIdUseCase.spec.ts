import 'reflect-metadata'
import { AppError } from '../../../../errors/AppError'
import { ErrorMessages } from '../../../../errors/ErrorMessages'
import { InMemoryUsersRepository } from '../../repositories/inMemory/InMemoryUsersRepository'
import { GetUserByIdUseCase } from './getUserByIdUseCase'

let usersRepositoryInMemory: InMemoryUsersRepository
let getUserByIdUseCase: GetUserByIdUseCase

describe('Get User UseCase', () => {

    beforeEach(() => {
        usersRepositoryInMemory = new InMemoryUsersRepository()
        getUserByIdUseCase = new GetUserByIdUseCase(
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

        const result = await getUserByIdUseCase.execute(user.id)

        expect(result).toHaveProperty('id')
    })

    it('should not be able to get user if it does not exists', async () => {
        await expect(
            getUserByIdUseCase.execute('invalid-user-id')
        ).rejects.toEqual(new AppError(ErrorMessages.userNotFound, 404))
    })
})