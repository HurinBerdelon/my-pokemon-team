import { Request, Response } from "express";
import { container } from "tsyringe";
import tokenHeader from "../../../../config/tokenHeader";
import { RefreshUserUseCase } from "./refreshUserUseCase";

export class RefreshUserController {

    async handle(request: Request, response: Response): Promise<Response> {

        const accessToken = request.headers[tokenHeader.accessToken] as string
        const refreshToken = request.headers[tokenHeader.refreshToken] as string

        const refreshUserUseCase = container.resolve(RefreshUserUseCase)

        const result = await refreshUserUseCase.execute({
            accessToken,
            refreshTokenValue: refreshToken
        })

        return response.json(result)
    }
}