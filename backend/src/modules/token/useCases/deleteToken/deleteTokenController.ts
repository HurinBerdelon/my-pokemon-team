import { Request, Response } from "express";
import { container } from "tsyringe";
import tokenHeader from "../../../../config/tokenHeader";
import { DeleteTokenUseCase } from "./deleteTokenUseCase";


export class DeleteTokenController {
    async handle(request: Request, response: Response): Promise<Response> {

        const refreshToken = request.headers[tokenHeader.refreshToken] as string

        const deleteTokenUseCase = container.resolve(DeleteTokenUseCase)

        await deleteTokenUseCase.execute(refreshToken)

        return response.send()
    }
}
