import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { ErrorMessages } from "../../../../errors/ErrorMessages";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class DeleteUserUseCase {

    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository
    ) { }

    async execute(user_id: string): Promise<void> {
        const userExists = await this.usersRepository.findById(user_id)

        if (!userExists) {
            throw new AppError(ErrorMessages.userNotFound, 404)
        }

        await this.usersRepository.delete(user_id)
    }
}

export { DeleteUserUseCase }