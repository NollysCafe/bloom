export const config = {
	// SendGrid
	sendgridApiKey: process.env.SENDGRID_API_KEY!,
	sendgridFromName: process.env.SENDGRID_FROM_NAME!,
	sendgridFromMail: process.env.SENDGRID_FROM_MAIL!,

	// PostgreSQL Database
	database: {
		type: process.env.DATABASE_TYPE || 'postgresql',
		host: process.env.DATABASE_HOST!,
		port: Number(process.env.DATABASE_PORT || 5432),
		name: process.env.DATABASE_NAME!,
		user: process.env.DATABASE_USER!,
		password: process.env.DATABASE_PASSWORD!,
	},

	// Google Auth
	google: {
		clientId: process.env.GOOGLE_CLIENT_ID!,
		clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
	},
}
