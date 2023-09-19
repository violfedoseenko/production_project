import { Link } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider'

import './styles/index.scss'
import { AppRouter } from 'app/providers/router'
import { NavBar } from 'widgets/NavBar'


export default function App() {
	const {theme, toggleTheme} = useTheme()

	return (
		<div className={classNames('app', {}, [theme])}>
			<NavBar/>
			<AppRouter/>
			<button onClick={toggleTheme}>TOGGLE</button>
		</div>
	)
}


