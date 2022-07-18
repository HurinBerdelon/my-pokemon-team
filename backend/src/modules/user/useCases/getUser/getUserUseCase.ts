import { User } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { ErrorMessages } from "../../../../errors/ErrorMessages";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
export class GetUserUseCase {

    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository
    ) { }

    async execute(userId: string): Promise<User> {

        const user = await this.usersRepository.findById(userId)

        if (!user) {
            throw new AppError(ErrorMessages.userNotFound, 404)
        }

        return user
    }
}
