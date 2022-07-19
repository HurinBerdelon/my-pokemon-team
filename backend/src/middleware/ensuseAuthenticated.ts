import { NextFunction, Request, Response } from "express";
import { verify } from 'jsonwebtoken'

import { AppError } from "../errors/AppError";
import envConfig from "../config/envConfig";
import { PrismaUsersRepository } from "../modules/user/repositories/implementations/PrismaUsersRepository";
interface IPayload {
    sub: string
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {

    const authHeader = request.headers.authorization

    if (!authHeader) {
        throw new AppError('Token Missing', 401)
    }

    const [, accessToken] = authHeader.split(' ')

    try {
        const { sub: user_id } = verify(accessToken, envConfig.JWT_SECRET) as IPayload

        const usersRepository = new PrismaUsersRepository()
        const user = await usersRepository.findById(user_id)

        if (!user) {
            throw new AppError('User does not Exists!', 401)
        }

        request.user = {
            id: user_id
        }

        next()
    } catch {
        throw new AppError('Invalid Token!', 401)
    }
}