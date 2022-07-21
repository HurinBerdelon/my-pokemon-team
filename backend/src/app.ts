import 'reflect-metadata'
import 'express-async-errors'
import express from 'express'

import { router } from './routes'

import './shared/container'
import { appErrorMiddleware } from './middleware/appErrorMiddleware'

export const app = express()

app.use(express.json())

app.use(router)

app.use(appErrorMiddleware)

