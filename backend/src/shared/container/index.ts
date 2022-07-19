import { container } from "tsyringe";
import { PrismaTokensRepository } from "../../modules/token/repositories/implementations/PrismaTokensRepository";
import { ITokenRepository } from "../../modules/token/repositories/ITokenRepository";
import { PrismaUsersRepository } from "../../modules/user/repositories/implementations/PrismaUsersRepository";
import { IUsersRepository } from "../../modules/user/repositories/IUsersRepository";

container.registerSingleton<IUsersRepository>(
    'UsersRepository',
    PrismaUsersRepository
)

container.registerSingleton<ITokenRepository>(
    'TokensRepository',
    PrismaTokensRepository
)