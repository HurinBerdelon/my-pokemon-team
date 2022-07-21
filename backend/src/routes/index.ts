import { Router } from "express";
import cors from 'cors'

import { usersRoutes } from "./users.routes";
import { authenticateRoutes } from "./authenticate.routes";
import { teamsRoutes } from "./teams.routes";

const router = Router()

router.use(cors(), authenticateRoutes)

router.use('/users', cors(), usersRoutes)
router.use('/team', cors(), teamsRoutes)

export { router }