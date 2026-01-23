'use client'

import { ScrollArea } from '@/components/ui/scroll-area'
import { config } from '@/config'

export function List() {
	return (
		<div className='relative w-full h-full rounded-xl overflow-hidden'>
			<ScrollArea className='h-full w-full'>
				<div className='flex flex-col gap-2 p-4'>
					{config.map((item) => (
						<div
							key={item.body}
							className='bg-card px-4 flex w-full min-h-20 items-center justify-center rounded-xl border'
						>
							{item.body}
						</div>
					))}
				</div>
			</ScrollArea>
		</div>
	)
}
