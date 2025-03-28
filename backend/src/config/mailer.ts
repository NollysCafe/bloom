import sendgridMail from '@sendgrid/mail'
import { config } from '@shared/config'
import { log } from '@backend/logger'

sendgridMail.setApiKey(config.sendgrid.apiKey)

/**
 * @async
 * @function sendMail
 * @description Sends an email via SendGrid
 * @param {string} to - Recipient email address
 * @param {string} subject - Email subject
 * @param {string} html - HTML content of the email
 * @param {string} [fromName] - Optional override for sender name
 */
export const sendMail = async (to: string, subject: string, html: string, fromName?: string): Promise<void> => {
	try {
		await sendgridMail.send({ to, from: { name: fromName || config.sendgrid.fromName, email: config.sendgrid.fromMail }, subject, html })
		log.success(`📬 Sent email to ${to} - ${subject}`)
	} catch (error: any) {
		log.error('❌ Failed to send email:', error?.response?.body || error)
	}
}
