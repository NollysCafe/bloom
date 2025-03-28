import { Pool } from 'pg'
import { config } from '@shared/config'
import { log } from '../logger'

/**
 * @name database
 * @description Singleton PostreSQL connection pool for bloom
 */
export const database = new Pool({
	host: config.database.host,
	port: config.database.port,
	database: config.database.name,
	user: config.database.user,
	password: config.database.password,
	ssl: false,
	max: 10,
	idleTimeoutMillis: 1000 * 30,
	connectionTimeoutMillis: 1000 * 5,
})

database.on('connect', () => log.success('📡 Connected to PostgreSQL 🎉'))
database.on('error', (error) => log.error('💥 PostgreSQL error:', error))

/**
 * @async
 * @name testConnection
 * @description Checks if Database is alive
 */
export const testConnection = async () => {
	try {
		await database.query('SELECT NOW()')
		log.success('✅ PostgreSQL connection is alive!')
	} catch (error) {
		log.error('❌ PostgreSQL test failed:', error)
		process.exit(1)
	}
}
