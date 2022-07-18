// import { Router } from "express";
// import { ensureAuthenticated } from "../middleware/ensuseAuthenticated";
// import { AuthenticateUserController } from "../modules/accounts/useCases/authenticateUser/authenticateUserController";
// import { CreateRefreshTokenController } from "../modules/accounts/useCases/createRefreshToken/refreshTokenController";
// import { LogoutUserController } from "../modules/accounts/useCases/logoutUser/logoutUserController";

// const authenticateRoutes = Router()

// const authenticateUserController = new AuthenticateUserController()
// const createRefreshTokenController = new CreateRefreshTokenController()
// const logoutUserController = new LogoutUserController()

// authenticateRoutes.post('/sessions', authenticateUserController.handle)
// authenticateRoutes.post('/refresh', createRefreshTokenController.handle)
// authenticateRoutes.delete('/logout', ensureAuthenticated, logoutUserController.handle)

// export { authenticateRoutes }