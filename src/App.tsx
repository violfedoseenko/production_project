import { Link, Route, Routes } from 'react-router-dom'
import { Counter } from './component/Counter'
import './index.scss'


import { AboutPageAsync } from './pages/AboutPage/AboutPage.async'
import { MainPageAsync } from './pages/MainPage/MainPage.async'
import { Suspense } from 'react'

export default function App() {
  return (
	<div className='app'>
		<Link to={'/'}> Главная </Link>
		<Link to={'/about'}> О сайте </Link>

		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				<Route path ='/about' element={<AboutPageAsync/>} />
				<Route path ='/' element={<MainPageAsync/>} />
			</Routes>
		</Suspense>
		{/* <div>test</div>
		<Counter /> */}
	</div>
  )
}
