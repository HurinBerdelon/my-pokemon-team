import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { ErrorMessages } from "../../../../errors/ErrorMessages";
import { CreateTokenDTO } from "../../DTO/CreateTokenDTO";
import { ITokenRepository } from "../../repositories/ITokenRepository";

@injectable()
export class CreateTokenUseCase {

    constructor(
        @inject('TokensRepository')
        private tokensRepository: ITokenRepository
    ) { }

    async execute({ expirationTime, userId, value }: CreateTokenDTO): Promise<void> {

        const tokenAlreadyExists = await this.tokensRepository.findByValue(value)

        if (tokenAlreadyExists) {
            throw new AppError(ErrorMessages.tokenAlreadyExists)
        }

        await this.tokensRepository.create({
            expirationTime,
            userId,
            value
        })
    }

}