import React from 'react'

// Components
import Section from '../components/ui/Section'
import { LuFlower, LuArrowRight, LuSun } from 'react-icons/lu'
import Button from '../components/ui/Button'

export default function Landing(): React.ReactElement {
	return (
		<main className='page landing'>
			{/* Example Section //TODO: Remove this section */}
			<Section
				id='philosophy'
				title='Why we bloom 🌱'
				description="We're not here to optimize every second. We're here to bloom at our own pace."
				icon={<LuFlower />}
				image={<img src='https://aix-en-provence.love-spots.com/wp-content/uploads/sites/4/2022/12/Kava_Coffee-shop-Aix_City-Guide_Love-Spots_02-570x370.jpg' />}
				direction='left'
				background='alternative'
				border='both'
				separator={<img src='https://i.imgur.com/wBNIcx7.png' alt='leaf divider' />}
			/>

			{/* Example Buttons //TODO: Remove these buttons */}
			<h5>Large</h5>
			<Button variant='primary' size='large' iconRight={<LuArrowRight />}>Start your quest</Button>
			<Button variant='secondary' size='large' iconRight={<LuArrowRight />}>Join the community</Button>
			<Button variant='ghost' size='large' iconRight={<LuArrowRight />}>Learn more</Button>
			<Button variant='danger' size='large' iconRight={<LuArrowRight />}>Delete account</Button>
			<br />
			<h5>Medium</h5>
			<Button variant='primary' size='medium' iconRight={<LuArrowRight />}>Start your quest</Button>
			<Button variant='secondary' size='medium' iconRight={<LuArrowRight />}>Join the community</Button>
			<Button variant='ghost' size='medium' iconRight={<LuArrowRight />}>Learn more</Button>
			<Button variant='danger' size='medium' iconRight={<LuArrowRight />}>Delete account</Button>
			<br />
			<h5>Small</h5>
			<Button variant='primary' size='small' iconRight={<LuArrowRight />}>Start your quest</Button>
			<Button variant='secondary' size='small' iconRight={<LuArrowRight />}>Join the community</Button>
			<Button variant='ghost' size='small' iconRight={<LuArrowRight />}>Learn more</Button>
			<Button variant='danger' size='small' iconRight={<LuArrowRight />}>Delete account</Button>
			<br />
			<h5>Large (disabled)</h5>
			<Button variant='primary' size='large' iconRight={<LuArrowRight />} disabled>Start your quest</Button>
			<Button variant='secondary' size='large' iconRight={<LuArrowRight />} disabled>Join the community</Button>
			<Button variant='ghost' size='large' iconRight={<LuArrowRight />} disabled>Learn more</Button>
			<Button variant='danger' size='large' iconRight={<LuArrowRight />} disabled>Delete account</Button>
			<br />
			<h5>Medium (disabled)</h5>
			<Button variant='primary' size='medium' iconRight={<LuArrowRight />} disabled>Start your quest</Button>
			<Button variant='secondary' size='medium' iconRight={<LuArrowRight />} disabled>Join the community</Button>
			<Button variant='ghost' size='medium' iconRight={<LuArrowRight />} disabled>Learn more</Button>
			<Button variant='danger' size='medium' iconRight={<LuArrowRight />} disabled>Delete account</Button>
			<br />
			<h5>Small (disabled)</h5>
			<Button variant='primary' size='small' iconRight={<LuArrowRight />} disabled>Start your quest</Button>
			<Button variant='secondary' size='small' iconRight={<LuArrowRight />} disabled>Join the community</Button>
			<Button variant='ghost' size='small' iconRight={<LuArrowRight />} disabled>Learn more</Button>
			<Button variant='danger' size='small' iconRight={<LuArrowRight />} disabled>Delete account</Button>
			<br />
			<h5>Large (loading)</h5>
			<Button variant='primary' size='large' iconRight={<LuArrowRight />} loading>Start your quest</Button>
			<Button variant='secondary' size='large' iconRight={<LuArrowRight />} loading>Join the community</Button>
			<Button variant='ghost' size='large' iconRight={<LuArrowRight />} loading>Learn more</Button>
			<Button variant='danger' size='large' iconRight={<LuArrowRight />} loading>Delete account</Button>
			<br />
			<h5>Medium (loading)</h5>
			<Button variant='primary' size='medium' iconRight={<LuArrowRight />} loading>Start your quest</Button>
			<Button variant='secondary' size='medium' iconRight={<LuArrowRight />} loading>Join the community</Button>
			<Button variant='ghost' size='medium' iconRight={<LuArrowRight />} loading>Learn more</Button>
			<Button variant='danger' size='medium' iconRight={<LuArrowRight />} loading>Delete account</Button>
			<br />
			<h5>Small (loading)</h5>
			<Button variant='primary' size='small' iconRight={<LuArrowRight />} loading>Start your quest</Button>
			<Button variant='secondary' size='small' iconRight={<LuArrowRight />} loading>Join the community</Button>
			<Button variant='ghost' size='small' iconRight={<LuArrowRight />} loading>Learn more</Button>
			<Button variant='danger' size='small' iconRight={<LuArrowRight />} loading>Delete account</Button>
			<br />
			<h5>Large (fx: bounce)</h5>
			<Button variant='primary' size='large' iconRight={<LuArrowRight />} fx='bounce'>Start your quest</Button>
			<Button variant='secondary' size='large' iconRight={<LuArrowRight />} fx='bounce'>Join the community</Button>
			<Button variant='ghost' size='large' iconRight={<LuArrowRight />} fx='bounce'>Learn more</Button>
			<Button variant='danger' size='large' iconRight={<LuArrowRight />} fx='bounce'>Delete account</Button>
			<br />
			<h5>Medium (fx: glow)</h5>
			<Button variant='primary' size='medium' iconRight={<LuArrowRight />} fx='glow'>Start your quest</Button>
			<Button variant='secondary' size='medium' iconRight={<LuArrowRight />} fx='glow'>Join the community</Button>
			<Button variant='ghost' size='medium' iconRight={<LuArrowRight />} fx='glow'>Learn more</Button>
			<Button variant='danger' size='medium' iconRight={<LuArrowRight />} fx='glow'>Delete account</Button>
			<br />
			<h5>Small (fx: pulse)</h5>
			<Button variant='primary' size='small' iconRight={<LuArrowRight />} fx='pulse'>Start your quest</Button>
			<Button variant='secondary' size='small' iconRight={<LuArrowRight />} fx='pulse'>Join the community</Button>
			<Button variant='ghost' size='small' iconRight={<LuArrowRight />} fx='pulse'>Learn more</Button>
			<Button variant='danger' size='small' iconRight={<LuArrowRight />} fx='pulse'>Delete account</Button>
			<hr />
			<h5>Theme</h5>
			<Button variant='primary' size='small' iconLeft={<LuSun />} onClick={() => document.documentElement.dataset.theme = document.documentElement.dataset.theme == 'dark' ? 'light' : 'dark'}>Switch mode</Button>
		</main>
	)
}
