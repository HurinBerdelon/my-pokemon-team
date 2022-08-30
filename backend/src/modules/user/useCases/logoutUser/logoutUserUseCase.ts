import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../errors/AppError';
import { ErrorMessages } from '../../../../errors/ErrorMessages';
import { ITokenRepository } from '../../../token/repositories/ITokenRepository';

@injectable()
export class LogoutUserUseCase {

    constructor(
        @inject('TokensRepository')
        private tokensRepository: ITokenRepository
    ) { }

    async execute(refreshTokenValue: string): Promise<void> {

        const refreshToken = await this.tokensRepository.findByValue(refreshTokenValue)

        if (refreshToken) {
            await this.tokensRepository.delete(refreshTokenValue)
        }
    }
}