import session from 'express-session'
import { config } from '@shared/config'
import { log } from '@backend/logger'

/**
 * @name sessionMiddleware
 * @description Session middleware using express-session
 */
export const sessionMiddleware = session({
	secret: config.session.secret,
	resave: false,
	saveUninitialized: false,
	cookie: {
		secure: config.env === 'production',
		httpOnly: true,
		sameSite: 'lax',
	}
})

log.success('[session] Session middleware initialized')
