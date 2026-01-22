import { MarqueeCards } from './marqueeCards'
import { Title } from './title'
import { List } from './list'

export default function App() {
	return (
		<div className='flex flex-col'>
			<Title />
			<div className='flex gap-4 max-h-155'>
				<MarqueeCards />
				<List />
			</div>
		</div>
	)
}
