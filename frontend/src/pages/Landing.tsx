import React from 'react'

// Components
import { LuSun } from 'react-icons/lu'
import ButtonGroup from '../components/ui/ButtonGroup'
import Button from '../components/ui/Button'

export default function Landing(): React.ReactElement {
	return (
		<main className='page landing'>
			{/* Example Button Groups //TODO: Remove */}
			<h5>Button Group (alignment: center)</h5>
			<ButtonGroup alignment='center'>
				<Button variant='primary' size='small' iconLeft={<LuSun />} onClick={() => document.documentElement.dataset.theme = 'dark'}>Dark</Button>
				<Button variant='primary' size='small' iconLeft={<LuSun />} onClick={() => document.documentElement.dataset.theme = 'light'}>Light</Button>
			</ButtonGroup>

			<h5>Button Group (alignment: left)</h5>
			<ButtonGroup alignment='left'>
				<Button variant='primary' size='small' iconLeft={<LuSun />} onClick={() => document.documentElement.dataset.theme = 'dark'}>Dark</Button>
				<Button variant='primary' size='small' iconLeft={<LuSun />} onClick={() => document.documentElement.dataset.theme = 'light'}>Light</Button>
			</ButtonGroup>

			<h5>Button Group (alignment: right)</h5>
			<ButtonGroup alignment='right'>
				<Button variant='primary' size='small' iconLeft={<LuSun />} onClick={() => document.documentElement.dataset.theme = 'dark'}>Dark</Button>
				<Button variant='primary' size='small' iconLeft={<LuSun />} onClick={() => document.documentElement.dataset.theme = 'light'}>Light</Button>
			</ButtonGroup>

			<h5>Button Group (gap: small)</h5>
			<ButtonGroup gap='small'>
				<Button variant='primary' size='small' iconLeft={<LuSun />} onClick={() => document.documentElement.dataset.theme = 'dark'}>Dark</Button>
				<Button variant='primary' size='small' iconLeft={<LuSun />} onClick={() => document.documentElement.dataset.theme = 'light'}>Light</Button>
			</ButtonGroup>

			<h5>Button Group (gap: medium)</h5>
			<ButtonGroup gap='medium'>
				<Button variant='primary' size='small' iconLeft={<LuSun />} onClick={() => document.documentElement.dataset.theme = 'dark'}>Dark</Button>
				<Button variant='primary' size='small' iconLeft={<LuSun />} onClick={() => document.documentElement.dataset.theme = 'light'}>Light</Button>
			</ButtonGroup>

			<h5>Button Group (gap: large)</h5>
			<ButtonGroup gap='large'>
				<Button variant='primary' size='small' iconLeft={<LuSun />} onClick={() => document.documentElement.dataset.theme = 'dark'}>Dark</Button>
				<Button variant='primary' size='small' iconLeft={<LuSun />} onClick={() => document.documentElement.dataset.theme = 'light'}>Light</Button>
			</ButtonGroup>
		</main>
	)
}
