import { memo } from 'react'
import { IconProps } from '@/presentation/protocols'

function MenuIcon({ width = 16, height = 16, color = '#FFFFFF' }: IconProps) {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={width} height={height}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path fill={color} d='M16 18v2H5v-2h11zm5-7v2H3v-2h18zm-2-7v2H8V4h11z' />
		</svg>
	)
}

export default memo(MenuIcon)
