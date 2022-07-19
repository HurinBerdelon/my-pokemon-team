import { Router } from "express";
import { AuthenticateUserController } from "../modules/user/useCases/authenticateUser/authenticateUserController";

export const authenticateRoutes = Router()

const authenticateUserController = new AuthenticateUserController()
// const createRefreshTokenController = new CreateRefreshTokenController()
// const logoutUserController = new LogoutUserController()

authenticateRoutes.post('/sessions', authenticateUserController.handle)
// authenticateRoutes.post('/refresh', createRefreshTokenController.handle)
// authenticateRoutes.delete('/logout', ensureAuthenticated, logoutUserController.handle)