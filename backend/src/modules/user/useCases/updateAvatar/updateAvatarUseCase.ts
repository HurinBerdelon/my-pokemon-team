import { inject, injectable } from "tsyringe"
import { tmpAvatarFolder } from "../../../../config/tmpAvatarFolder"
import { AppError } from "../../../../errors/AppError"
import { ErrorMessages } from "../../../../errors/ErrorMessages"
import { IStorageProvider } from "../../../../shared/providers/storageProvider/IStorageProvider"
import { deleteFile } from "../../../../utils/file"
import { IUsersRepository } from "../../repositories/IUsersRepository"

interface IRequest {
    user_id: string
    avatarFile: string
}

@injectable()
export class UpdateAvatarUseCase {

    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,
        @inject('StorageProvider')
        private storageProvider: IStorageProvider
    ) { }

    async execute({ user_id, avatarFile }: IRequest): Promise<void> {
        const user = await this.usersRepository.findById(user_id)

        if (!user) {
            throw new AppError(ErrorMessages.userNotFound, 404)
        }

        if (process.env.DEV_ENV) {
            const avatarURL = `${tmpAvatarFolder}/${avatarFile}`

            if (user.avatarURL) {
                await deleteFile(user.avatarURL)
            }

            await this.usersRepository.updateAvatar(user_id, avatarURL)
        } else {

            if (user.avatarURL) {
                const avatarNameSplited = user.avatarURL.split('/')
                const avatarName = avatarNameSplited[avatarNameSplited.length - 1]

                await this.storageProvider.delete('avatar', avatarName)
            }

            await this.storageProvider.save('avatar', avatarFile)
        }
    }
}