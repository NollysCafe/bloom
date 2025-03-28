import 'tsconfig-paths/register'
import '@shared/initEnv'
import App from '@backend/config/app'
import { config } from '@shared/config'
import { log } from '@backend/logger'

import passport from 'passport'
import { sessionMiddleware } from './middlewares/session'
import authRoutes from './routes/auth'
import './config/auth'
import express from 'express';


// Create App instance
const app = new App()

// MIDDLEWARES
app.addMiddleware(sessionMiddleware)
app.addMiddleware(passport.initialize())
app.addMiddleware(passport.session())

// ROUTES
app.addRoute('/auth', authRoutes)
// TODO: Remove this route after testing
app.addRoute('/', express.Router().get('/', (request: express.Request, response: express.Response) => {
	if (request.isAuthenticated()) response.json({ user: request.user })
	else response.redirect('/auth/google')
}))


// Start server
app.start(config.backendPort, () => log.success(`bloom server running at http://localhost:${config.backendPort}`))
