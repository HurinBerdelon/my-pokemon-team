import { container } from "tsyringe";
import envConfig from "../../config/envConfig";
import { PrismaPokemonRepository } from "../../modules/pokemon/repositories/implementations/PrismaPokemonRepository";
import { IPokemonRepository } from "../../modules/pokemon/repositories/IPokemonRepository";
import { PrismaTeamRepository } from "../../modules/team/repositories/implementations/PrismaTeamRepository";
import { ITeamRepository } from "../../modules/team/repositories/ITeamRepository";
import { PrismaTokensRepository } from "../../modules/token/repositories/implementations/PrismaTokensRepository";
import { ITokenRepository } from "../../modules/token/repositories/ITokenRepository";
import { PrismaUsersRepository } from "../../modules/user/repositories/implementations/PrismaUsersRepository";
import { IUsersRepository } from "../../modules/user/repositories/IUsersRepository";
import { LocalStorageProvider } from "../providers/storageProvider/implementations/LocalStorageProvider";
import { S3StorageProvider } from "../providers/storageProvider/implementations/S3StorageProvider";
import { IStorageProvider } from "../providers/storageProvider/IStorageProvider";

container.registerSingleton<IUsersRepository>(
    'UsersRepository',
    PrismaUsersRepository
)

container.registerSingleton<ITokenRepository>(
    'TokensRepository',
    PrismaTokensRepository
)

container.registerSingleton<ITeamRepository>(
    'TeamsRepository',
    PrismaTeamRepository
)

container.registerSingleton<IPokemonRepository>(
    'PokemonsRepository',
    PrismaPokemonRepository
)

const diskStorageProvider = {
    local: LocalStorageProvider,
    AWS_S3: S3StorageProvider
}

container.registerSingleton<IStorageProvider>(
    'StorageProvider',
    diskStorageProvider[envConfig.diskStorage]
)