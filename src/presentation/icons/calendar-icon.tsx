import { memo } from 'react'
import { IconProps } from '@/presentation/protocols'

function CalendarIcon({ width = 16, height = 16, color = '#fff' }: IconProps) {
	return (
		<svg
			width={width}
			height={height}
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path fill='none' d='M0 0h24v24H0z' />
			<path
				fill={color}
				d='M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zm-2 2H9v2H7V5H4v4h16V5h-3v2h-2V5zm5 6H4v8h16v-8z'
			/>
		</svg>
	)
}

export default memo(CalendarIcon)
