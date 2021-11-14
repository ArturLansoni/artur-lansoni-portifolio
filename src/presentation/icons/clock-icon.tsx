import { memo } from 'react'
import { IconProps } from '@/presentation/protocols'

function ClockIcon({ width = 16, height = 16, color = '#B8BDC3' }: IconProps) {
	return (
		<svg
			width={width}
			height={height}
			viewBox='0 0 16 16'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M8 14.667A6.667 6.667 0 118 1.333a6.667 6.667 0 010 13.334zm0-1.334A5.334 5.334 0 108 2.666a5.334 5.334 0 000 10.667zM8.667 8h2.667v1.333h-4V4.667h1.333V8z'
				fill={color}
			/>
		</svg>
	)
}

export default memo(ClockIcon)
