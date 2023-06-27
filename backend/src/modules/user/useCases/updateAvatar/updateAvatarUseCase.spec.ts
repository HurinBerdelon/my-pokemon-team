import 'reflect-metadata'
import { AppError } from '../../../../errors/AppError'
import { ErrorMessages } from '../../../../errors/ErrorMessages'
import { InMemoryUsersRepository } from '../../repositories/inMemory/InMemoryUsersRepository'

import { UpdateAvatarUseCase } from "./updateAvatarUseCase"

const storageProvider_saveSpy = jest.fn(() => {
    return async (folder: string, file: string) => `${folder}/${file}`
})
const storageProvider_deleteSpy = jest.fn()

let usersRepositoryInMemory: InMemoryUsersRepository
let updateAvatarUseCase: UpdateAvatarUseCase

describe('UpdateAvatar', () => {

    beforeEach(() => {
        usersRepositoryInMemory = new InMemoryUsersRepository()
        updateAvatarUseCase = new UpdateAvatarUseCase(
            usersRepositoryInMemory,
            { save: storageProvider_saveSpy(), delete: storageProvider_deleteSpy }
        )
    })

    it('should be able to create an User\'s Avatar', async () => {
        const providerId = '3r-part-userId'

        await usersRepositoryInMemory.create({
            name: 'Name Test',
            providerId
        })

        const user = usersRepositoryInMemory.usersRepository.find(user => user.providerId === providerId)

        await updateAvatarUseCase.execute({
            user_id: user.id,
            avatarFile: 'PathForAvatar'
        })

        const userUpdated = usersRepositoryInMemory.usersRepository.find(user => user.providerId === providerId)

        expect(storageProvider_saveSpy).toHaveBeenCalled()
        expect(userUpdated.avatarURL).toBeTruthy()
    })

    it('should be able to update User\'s Avatar', async () => {
        const providerId = '3r-part-userId'

        await usersRepositoryInMemory.create({
            name: 'Name Test',
            providerId
        })

        const user = usersRepositoryInMemory.usersRepository.find(user => user.providerId === providerId)

        await updateAvatarUseCase.execute({
            user_id: user.id,
            avatarFile: 'PathForAvatar'
        })

        await updateAvatarUseCase.execute({
            user_id: user.id,
            avatarFile: 'newPathForAvatar'
        })

        const userUpdated = usersRepositoryInMemory.usersRepository.find(user => user.providerId === providerId)

        expect(storageProvider_saveSpy).toHaveBeenCalled()
        expect(storageProvider_deleteSpy).toHaveBeenCalled()
        expect(userUpdated.avatarURL.includes('newPathForAvatar')).toBeTruthy()
    })

    it('should not be able to update avatar of non-existent user', async () => {
        await expect(
            updateAvatarUseCase.execute({
                user_id: 'invalid_id',
                avatarFile: 'PathForAvatar'
            })
        ).rejects.toEqual(new AppError(ErrorMessages.userNotFound, 404))
    })

})