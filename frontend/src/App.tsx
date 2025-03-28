import React from 'react'

// Components
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages
import Landing from './pages/Landing'

export default function App(): React.ReactElement {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Landing />} />
			</Routes>
		</BrowserRouter>
	)
}
