import { Link } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider'

import './styles/index.scss'
import { AppRouter } from 'app/providers/router'
import { NavBar } from 'widgets/NavBar'
import { SideBar } from 'widgets/SideBar'
import { useTranslation } from 'react-i18next'
import { Suspense } from 'react'

 

export default function App() {
	const {theme} = useTheme()
	const { t, i18n } = useTranslation();

	return (
		<div className={classNames('app', {}, [theme])}>
			<Suspense fallback=''>
				<NavBar/>
				
				<div className='content-page'>
					<SideBar />
					<AppRouter/>
				</div>
			</Suspense>
		</div>
	)
}


