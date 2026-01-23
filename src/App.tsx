import { MarqueeCards } from './marqueeCards'
import { Title } from './title'
import { List } from './list'

export default function App() {
	return (
		<div className='flex flex-col h-screen overflow-hidden pb-5'>
			<Title />
			<div className='flex flex-col md:flex-row gap-4 flex-1 min-h-0 overflow-hidden'>
				<div className='flex-1 md:flex-1 min-h-0 overflow-hidden'>
					<MarqueeCards />
				</div>
				<div className='flex-1 md:flex-1 md:max-h-155 min-h-0 overflow-hidden'>
					<List />
				</div>
			</div>
		</div>
	)
}
