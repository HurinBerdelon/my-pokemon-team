import 'reflect-metadata'
import dayjs from "dayjs"
import { AppError } from "../../../../errors/AppError"
import { ErrorMessages } from "../../../../errors/ErrorMessages"
import { InMemoryTokenRepository } from "../../../token/repositories/inMemory/InMemoryTokensRepository"
import { InMemoryUsersRepository } from "../../repositories/inMemory/InMemoryUsersRepository"
import { LogoutUserUseCase } from "./logoutUserUseCase"

let tokensRepositoryInMemory: InMemoryTokenRepository
let usersRepositoryInMemory: InMemoryUsersRepository
let logoutUserUseCase: LogoutUserUseCase

describe('Logout User', () => {

    beforeEach(() => {
        tokensRepositoryInMemory = new InMemoryTokenRepository()
        usersRepositoryInMemory = new InMemoryUsersRepository()
        logoutUserUseCase = new LogoutUserUseCase(tokensRepositoryInMemory)
    })

    it('should be able to delete user\'s refresh token when logout is requested', async () => {
        const providerId = '3rd-part-userId'
        const name = 'userNameTest'

        await usersRepositoryInMemory.create({ name, providerId })

        const user = await usersRepositoryInMemory.findByProviderId(providerId)

        const refreshTokenValue = 'refreshTokenValue'

        await tokensRepositoryInMemory.create({
            value: refreshTokenValue,
            expiresAt: dayjs().add(60 * 15, 'seconds').toDate(), //15 minutes
            userId: user.id
        })

        await logoutUserUseCase.execute(refreshTokenValue)

        expect(tokensRepositoryInMemory.tokensRepository.length).toEqual(0)
    })
})