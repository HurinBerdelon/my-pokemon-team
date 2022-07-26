import 'reflect-metadata'
import 'express-async-errors'
import express from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerFile from './swagger.json'

import { router } from './routes'
import { appErrorMiddleware } from './middleware/appErrorMiddleware'

import './shared/container'

export const app = express()

app.use(express.json())

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(router)

app.use(appErrorMiddleware)

