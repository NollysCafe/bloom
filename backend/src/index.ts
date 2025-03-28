import 'tsconfig-paths/register'
import '@shared/initEnv'
import App from '@backend/config/app'
import { config } from '@shared/config'
import { log } from '@backend/logger'

// Create App instance
const app = new App()

// Start server
app.start(config.backendPort, () => log.success(`bloom server running at http://localhost:${config.backendPort}`))
