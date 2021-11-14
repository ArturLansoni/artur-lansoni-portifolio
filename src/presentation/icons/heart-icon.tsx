import { memo } from 'react'
import { IconProps } from '@/presentation/protocols'

function HeartIcon({ width = 16, height = 16, color = '#fff' }: IconProps) {
	return (
		<svg
			width={width}
			height={height}
			viewBox='0 0 16 16'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M8 3.02a3.999 3.999 0 015.653 5.642l-5.654 5.661-5.651-5.661A4.001 4.001 0 018 3.019zm4.552 1.093a2.665 2.665 0 00-3.66-.102l-.89.799-.891-.798a2.666 2.666 0 00-3.79 3.737L8 12.436l4.68-4.687a2.667 2.667 0 00-.13-3.636z'
				fill={color}
			/>
		</svg>
	)
}

export default memo(HeartIcon)
