import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { CreateUserDTO } from "../../DTO/CreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class CreateUserUseCase {

    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository
    ) { }

    async execute({ name, providerId }: CreateUserDTO): Promise<void> {

        await this.usersRepository.create({
            name,
            providerId
        })
    }

}

export { CreateUserUseCase }