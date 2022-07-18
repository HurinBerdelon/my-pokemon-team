import { inject, injectable } from "tsyringe"
import { tmpAvatarFolder } from "../../../../config/tmpAvatarFolder"
import { AppError } from "../../../../errors/AppError"
import { ErrorMessages } from "../../../../errors/ErrorMessages"
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
        private usersRepository: IUsersRepository
    ) { }

    async execute({ user_id, avatarFile }: IRequest): Promise<void> {
        const user = await this.usersRepository.findById(user_id)

        if (!user) {
            throw new AppError(ErrorMessages.userNotFound, 404)
        }

        const avatarURL = `${tmpAvatarFolder}/${avatarFile}`

        if (user.avatarURL) {
            await deleteFile(`./tmp/avatar/${user.avatarURL}`)
        }

        await this.usersRepository.updateAvatar(user_id, avatarURL)
    }
}