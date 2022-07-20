import 'reflect-metadata'
import { AppError } from '../../../../errors/AppError'
import { ErrorMessages } from '../../../../errors/ErrorMessages'
import { S3StorageProvider } from '../../../../shared/providers/storageProvider/implementations/S3StorageProvider'
import { InMemoryUsersRepository } from '../../repositories/inMemory/InMemoryUsersRepository'

import { UpdateAvatarUseCase } from "./updateAvatarUseCase"

let usersRepositoryInMemory: InMemoryUsersRepository
let storageProvider: S3StorageProvider
let updateAvatarUseCase: UpdateAvatarUseCase

describe('UpdateAvatar', () => {

    beforeEach(() => {
        usersRepositoryInMemory = new InMemoryUsersRepository()
        storageProvider = new S3StorageProvider()
        updateAvatarUseCase = new UpdateAvatarUseCase(
            usersRepositoryInMemory,
            storageProvider
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