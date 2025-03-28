import 'dotenv/config'
import App from './config/app'
import express from 'express'
import { config } from '../../shared/config'
import { log } from './logger'

// Create App instance
const app = new App()

// Temporary health router
app.addRoute('/health', express.Router().get('/', (_: express.Request, response: express.Response) => { response.send('🧃 bloom backend is alive'); }))

// Start server
app.start(config.backendPort, () => {
	log.success(`bloom server running at http://localhost:${config.backendPort}`)
})
