import { memo } from 'react'
import { IconProps } from '@/presentation/protocols'

function KotlinIcon({ width = 16, height = 16, color = '#0095D5' }: IconProps) {
	return (
		<svg
			width={width}
			height={height}
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M1.3 24l11.3-11.5L24 24H1.3zM0 0h12L0 12.5V0zm13.4 0L0 14v10l12-12L24 0H13.4z'
				fill={color}
			/>
		</svg>
	)
}
export default memo(KotlinIcon)
