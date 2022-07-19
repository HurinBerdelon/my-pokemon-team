import 'reflect-metadata'
import { InMemoryTokenRepository } from "../../../token/repositories/inMemory/InMemoryTokensRepository"
import { InMemoryUsersRepository } from "../../repositories/inMemory/InMemoryUsersRepository"
import { AuthenticateUserUseCase } from "./authenticateUserUseCase"

let usersRepositoryInMemory: InMemoryUsersRepository
let tokensRepositoryInMemory: InMemoryTokenRepository
let authenticateUserUseCase: AuthenticateUserUseCase

describe('Authenticate User', () => {

    beforeEach(() => {
        usersRepositoryInMemory = new InMemoryUsersRepository()
        tokensRepositoryInMemory = new InMemoryTokenRepository()
        authenticateUserUseCase = new AuthenticateUserUseCase(
            usersRepositoryInMemory,
            tokensRepositoryInMemory
        )
    })

    it('should be able to create user if user does not exists and authenticate it', async () => {
        const providerId = '3rd-part-userId'
        const name = 'userNameTest'
        const response = await authenticateUserUseCase.execute(providerId, name)

        expect(response).toHaveProperty("user")
        expect(response).toHaveProperty("accessToken")
        expect(response).toHaveProperty("refreshToken")
        expect(usersRepositoryInMemory.usersRepository.length).toEqual(1)
        expect(tokensRepositoryInMemory.tokensRepository.length).toEqual(1)
    })

    it('should be able to authenticate user if user already exists', async () => {
        const providerId = '3rd-part-userId'
        const name = 'userNameTest'
        await usersRepositoryInMemory.create({ providerId, name })

        const user = await usersRepositoryInMemory.findByProviderId(providerId)

        const response = await authenticateUserUseCase.execute(user.providerId, user.name)

        expect(response).toHaveProperty("user")
        expect(response).toHaveProperty("accessToken")
        expect(response).toHaveProperty("refreshToken")
    })
})