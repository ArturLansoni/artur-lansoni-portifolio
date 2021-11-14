import { memo } from 'react'
import { IconProps } from '@/presentation/protocols'

function GmailIcon({ width = 16, height = 16, color = '#D14836' }: IconProps) {
	return (
		<svg
			width={width}
			height={height}
			viewBox='0 0 16 16'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M16 3v10c0 .567-.433 1-1 1h-1V4.925L8 9.233 2 4.925V14H1c-.567 0-1-.433-1-1V3c0-.283.108-.533.287-.712A.99.99 0 011 2h.333L8 6.833 14.667 2H15c.283 0 .533.108.713.288.18.179.287.429.287.712z'
				fill={color}
			/>
		</svg>
	)
}

export default memo(GmailIcon)
