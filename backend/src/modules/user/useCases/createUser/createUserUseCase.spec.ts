import 'reflect-metadata'
import { InMemoryUsersRepository } from '../../repositories/inMemory/InMemoryUsersRepository'
import { CreateUserUseCase } from "./createUserUseCase"

let usersRepositoryInMemory: InMemoryUsersRepository
let createUserUseCase: CreateUserUseCase

describe('Create User', () => {

    beforeEach(() => {
        usersRepositoryInMemory = new InMemoryUsersRepository()
        createUserUseCase = new CreateUserUseCase(
            usersRepositoryInMemory
        )
    })

    it('should be able to create a new user', async () => {
        const user = {
            name: 'UserNameTest',
            providerId: '3rd-part-userId'
        }

        await createUserUseCase.execute(user)

        expect(usersRepositoryInMemory.usersRepository.length).toEqual(1)
    })
})