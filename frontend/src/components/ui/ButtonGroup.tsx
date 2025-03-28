import React from 'react'

import '../../styles/components/ui/button-group.scss'

interface ButtonGroupProps {
	children: React.ReactNode
	alignment?: 'left' | 'center' | 'right'
	gap?: 'small' | 'medium' | 'large'
	className?: string
}

export default function ButtonGroup({ children, alignment = 'center', gap = 'medium', className = '' }: ButtonGroupProps): React.ReactElement {
	return (
		<div className={`button-group ${alignment} ${gap} ${className}`}>
			{children}
		</div>
	)
}
