import passport from 'passport'
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'
import { config } from '@shared/config'
import { log } from '@backend/logger'

// Dummy user logic
type User = { id: string, email: string, name: string }
const users = new Map<string, User>()

/**
 * Initialize Google OAuth strategy
 */
passport.use(new GoogleStrategy(
	{
		clientID: config.google.clientId,
		clientSecret: config.google.clientSecret,
		callbackURL: `${config.frontendUrl}/auth/callback`,
	},
	async (_, __, profile, done) => {
		try {
			const email = profile.emails?.[0].value
			const name = profile.displayName
			const id = profile.id

			if (!email || !name) throw new Error('Missing Google profile data')

			const user: User = { id, email, name }
			users.set(id, user)

			log.success(`🔐 Authenticated: ${name} (${email})`)
			done(null, user)
		} catch (error: any) {
			log.error('❌ Google auth failed:', error)
			done(error)
		}
	}
))

/**
 * @description Serialize + deserialize user for session use
 */
passport.serializeUser((user: any, done) => done(null, user.id))
passport.deserializeUser((id: string, done) => done(null, users.get(id) ?? null))
