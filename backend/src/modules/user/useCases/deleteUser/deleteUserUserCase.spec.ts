import 'reflect-metadata'
import { AppError } from '../../../../errors/AppError'
import { ErrorMessages } from '../../../../errors/ErrorMessages'
import { InMemoryUsersRepository } from '../../repositories/inMemory/InMemoryUsersRepository'
import { DeleteUserUseCase } from "./deleteUserUserCase"

let usersRepositoryInMemory: InMemoryUsersRepository
let deleteUserUseCase: DeleteUserUseCase

describe('Delete User', () => {

    beforeEach(() => {
        usersRepositoryInMemory = new InMemoryUsersRepository()
        deleteUserUseCase = new DeleteUserUseCase(
            usersRepositoryInMemory
        )
    })

    it('should be able to delete a user', async () => {
        const providerId = '3r-part-userId'

        await usersRepositoryInMemory.create({
            name: 'Name Test',
            providerId
        })

        const user = usersRepositoryInMemory.usersRepository.find(user => user.providerId === providerId)

        await deleteUserUseCase.execute(user.id)

        const userDeleted = await usersRepositoryInMemory.findById(user.id)

        expect(userDeleted).toBeUndefined()
    })

    it('should not be able to delete an non-existent user', async () => {
        await expect(
            deleteUserUseCase.execute('non-existent_id')
        ).rejects.toEqual(new AppError(ErrorMessages.userNotFound, 404))
    })

})