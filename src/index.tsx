import { render } from 'react-dom'

import {someFn} from './test'
import { Counter } from './component/counter'

render(
	<div>
		<Counter/>
	</div>,
	document.getElementById('root')
)