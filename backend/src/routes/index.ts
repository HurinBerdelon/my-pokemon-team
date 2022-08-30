import { Router } from "express";
import cors from 'cors'

import { usersRoutes } from "./users.routes";
import { authenticateRoutes } from "./authenticate.routes";
import { teamsRoutes } from "./teams.routes";

const router = Router()

const corsOptions = {
    origin: process.env.CLIENT_URL,
    optionSucessStatus: 200
}

router.use(cors(corsOptions), authenticateRoutes)

router.use('/users', cors(corsOptions), usersRoutes)
router.use('/team', cors(corsOptions), teamsRoutes)

export { router }