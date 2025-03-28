import React from 'react'

import '../../styles/components/ui/button.scss'

// Components
import { Link } from 'react-router-dom'

interface ButtonProps {
	children: React.ReactNode
	onClick?: () => void
	href?: string
	type?: 'button' | 'submit' | 'reset'
	variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
	size?: 'small' | 'medium' | 'large'
	iconLeft?: React.ReactNode
	iconRight?: React.ReactNode
	className?: string
	disabled?: boolean
	loading?: boolean
	fx?: 'bounce' | 'glow' | 'pulse'
}

export default function Button({ children, onClick, href, type = 'button', variant = 'primary', size = 'medium', iconLeft, iconRight, className = '', disabled = false, loading = false, fx }: ButtonProps): React.ReactElement {
	const classNames = `button ${variant} ${size} ${className} ${disabled || loading ? 'disabled' : ''} ${fx ?? ''}`

	const content = loading
		? <span className='loader' />
		: (
			<span className='content'>
				{iconLeft && <span className='icon left'>{iconLeft}</span>}
				<span className='text'>{children}</span>
				{iconRight && <span className='icon right'>{iconRight}</span>}
			</span>
		)

	if (href) {
		const isExternal = /^(http|https|www\.)/.test(href)
		return isExternal
			? <a href={href} className={classNames} target='_blank' rel='noopener noreferrer'>{content}</a>
			: <Link to={href} className={classNames}>{content}</Link>
	}

	return <button type={type} className={classNames} onClick={onClick} disabled={disabled}>{content}</button>
}
