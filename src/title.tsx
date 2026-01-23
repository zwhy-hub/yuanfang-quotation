'use client'

import { useRef } from 'react'

import { Confetti, type ConfettiRef } from '@/components/ui/confetti'
import { cn } from './lib/utils'

export function Title() {
	const confettiRef = useRef<ConfettiRef>(null)

	return (
		<div
			className={cn(
				'bg-background relative h-20 w-full',
				'flex-col flex items-center justify-center',
				'overflow-hidden rounded-lg border',
				'md:h-30'
			)}
		>
			<span
				className={cn(
					'pointer-events-none ',
					'bg-linear-to-b from-black to-gray-300/80 bg-clip-text',
					'text-center text-4xl leading-none font-semibold',
					'whitespace-pre-wrap text-transparent dark:from-white dark:to-slate-900/10',
					'md:text-6xl'
				)}
			>
				远方语录
			</span>

			<Confetti
				ref={confettiRef}
				className='absolute top-0 left-0 z-0 size-full'
				onMouseEnter={() => {
					confettiRef.current?.fire({})
				}}
			/>
		</div>
	)
}
