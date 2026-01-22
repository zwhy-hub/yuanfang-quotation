import { cn } from '@/lib/utils'
import { Marquee } from '@/components/ui/marquee'
import { config } from '@/config'

function distributeToRows(items: typeof config, rowCount: number) {
	const rows: (typeof config)[] = Array.from({ length: rowCount }, () => [])
	const rowLengths = new Array(rowCount).fill(0)

	items.forEach((item) => {
		const length = item.body.length
		const minIndex = rowLengths.indexOf(Math.min(...rowLengths))
		rows[minIndex].push(item)
		rowLengths[minIndex] += length
	})

	return rows
}

const rows = distributeToRows(config, 4)

const ReviewCard = ({ time, body }: { time: string; body: string }) => {
	return (
		<figure
			className={cn(
				'relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4',
				// light styles
				'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
				// dark styles
				'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]'
			)}
		>
			<div className='flex flex-row items-center gap-2'>
				<img className='rounded-full' width='32' height='32' alt='' src='./avatar.jpg' />
				<div className='flex flex-col'>
					<figcaption className='text-sm font-medium dark:text-white'>远方</figcaption>
					<p className='text-xs font-medium dark:text-white/40'>{time}</p>
				</div>
			</div>
			<blockquote className='mt-2 text-sm'>{body}</blockquote>
		</figure>
	)
}

export function MarqueeCards() {
	return (
		<div className='relative flex w-full flex-col items-center justify-center overflow-hidden'>
			{rows.map((row, index) => (
				<Marquee key={index} reverse={index % 2 === 1} pauseOnHover className='[--duration:20s]'>
					{row.map((review) => (
						<ReviewCard key={review.body} {...review} />
					))}
				</Marquee>
			))}
			<div className='from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r'></div>
			<div className='from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l'></div>
		</div>
	)
}
