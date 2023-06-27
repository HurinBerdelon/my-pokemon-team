import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { ErrorMessages } from "../../../../errors/ErrorMessages";
import { ITokenRepository } from "../../repositories/ITokenRepository";

@injectable()
export class DeleteTokenUseCase {

    constructor(
        @inject('TokensRepository')
        private tokensRepository: ITokenRepository
    ) { }

    async execute(value: string): Promise<void> {
        const tokenAlreadyExists = await this.tokensRepository.findByValue(value)

        if (!tokenAlreadyExists) {
            throw new AppError(ErrorMessages.tokenNotFound, 404)
        }

        await this.tokensRepository.delete(value)
    }
}