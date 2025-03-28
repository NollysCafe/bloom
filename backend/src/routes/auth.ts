import express from 'express'
import passport from 'passport'

export const router = express.Router()

// Start Google login
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }))

// Google OAuth callback
router.get('/callback', passport.authenticate('google', { successRedirect: '/', failureRedirect: '/auth/failure' }))

// Logout endpoint
router.get('/logout', (request: express.Request, response: express.Response) => request.logout(() => response.redirect('/')))

// Fallback error page
router.get('/failure', (_: express.Request, response: express.Response) => { response.status(401).send('Authentication Failed 🫠') })

export default router
