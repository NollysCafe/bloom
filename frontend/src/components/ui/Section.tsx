import React from 'react'

import '../../styles/components/ui/section.scss'

interface SectionProps {
	id?: string
	title?: string
	description?: string
	icon?: React.ReactNode
	image?: React.ReactNode
	direction?: 'left' | 'right' | 'center'
	background?: 'default' | 'alternative' | 'dark'
	border?: 'none' | 'top' | 'bottom' | 'both'
	separator?: React.ReactNode
	animateOnScroll?: boolean
	children?: React.ReactNode
}

export default function Section({ id, title, description, icon, image, direction = 'center', background = 'default', border = 'none', separator, animateOnScroll = false, children }: SectionProps): React.ReactElement {
	const layout = direction === 'center' ? 'centered' : 'split'

	const sectionRef = React.useRef<HTMLDivElement>(null)
	const [visible, setVisible] = React.useState<boolean>(!animateOnScroll)

	React.useEffect(() => {
		if (!animateOnScroll || !sectionRef.current) {
			console.log('No animation on scroll or sectionRef is null')
			return
		}
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setVisible(true)
					observer.disconnect()
				}
			}, { threshold: 0.1 }
		)
		observer.observe(sectionRef.current)
		return () => observer.disconnect()
	}, [animateOnScroll])

	return (
		<section id={id} className={`section ${layout} ${background} border-${border} ${visible ? 'visible' : 'hidden'}`} ref={sectionRef}>
			{border === 'top' || border === 'both' ? <div className='border top' /> : null}

			<div className='container'>
				{layout === 'split' && direction === 'left' && image && <div className='image'>{image}</div>}

				<div className='content'>
					{icon && <div className='icon'>{icon}</div>}
					{title && <h2 className='title'>{title}</h2>}
					{description && <p className='description'>{description}</p>}
					{children && <div className='children'>{children}</div>}
					{separator && <div className='separator'>{separator}</div>}
				</div>

				{layout === 'split' && direction === 'right' && image && <div className='image'>{image}</div>}

				{layout === 'centered' && image && <div className='image centered'>{image}</div>}
			</div>

			{border === 'bottom' || border === 'both' ? <div className='border bottom' /> : null}
		</section>
	)
}
