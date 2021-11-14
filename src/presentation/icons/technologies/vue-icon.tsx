import { memo } from 'react'
import { IconProps } from '@/presentation/protocols'

function VueIcon({ width = 16, height = 16, color = '#4FC08D' }: IconProps) {
	return (
		<svg
			width={width}
			height={height}
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M24 1.61h-9.94L12 5.16 9.94 1.61H0l12 20.78L24 1.61zM12 14.08L5.16 2.23h4.43L12 6.41l2.41-4.18h4.43L12 14.08z'
				fill={color}
			/>
		</svg>
	)
}

export default memo(VueIcon)
