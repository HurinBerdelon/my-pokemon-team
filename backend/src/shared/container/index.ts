import { container } from "tsyringe";
import { PrismaUsersRepository } from "../../modules/user/repositories/implementations/PrismaUsersRepository";
import { IUsersRepository } from "../../modules/user/repositories/IUsersRepository";

container.registerSingleton<IUsersRepository>(
    'UsersRepository',
    PrismaUsersRepository
)