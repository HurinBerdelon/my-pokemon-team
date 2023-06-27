import { inject, injectable } from "tsyringe";
import { CreateUserDTO } from "../../DTO/CreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
export class CreateUserUseCase {

    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,
    ) { }

    async execute({ name, providerId }: CreateUserDTO): Promise<void> {

        await this.usersRepository.create({
            name,
            providerId
        })
    }

}