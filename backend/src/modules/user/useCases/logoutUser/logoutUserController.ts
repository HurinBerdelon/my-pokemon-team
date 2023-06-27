import { Request, Response } from "express";
import { container } from "tsyringe";
import tokenHeader from "../../../../config/tokenHeader";
import { LogoutUserUseCase } from "./logoutUserUseCase";

export class LogoutUserController {

    async handle(request: Request, response: Response): Promise<Response> {

        const refreshTokenValue = request.headers[tokenHeader.refreshToken] as string

        const logoutUserUseCase = container.resolve(LogoutUserUseCase)

        await logoutUserUseCase.execute(refreshTokenValue)

        return response.send()
    }
}