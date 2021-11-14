import { memo } from 'react'
import { IconProps } from '@/presentation/protocols'

function ShareIcon({ width = 16, height = 16, color = '#fff' }: IconProps) {
	return (
		<svg
			width={width}
			height={height}
			viewBox='0 0 16 16'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M8.667 9.333H7.333a6 6 0 00-5.312 3.207 6.667 6.667 0 016.645-7.207V1.667l7 5.666-7 5.667V9.333zM7.333 8H10v2.205l3.547-2.872L10 4.461v2.206H8.667a5.321 5.321 0 00-4.038 1.848A7.325 7.325 0 017.333 8z'
				fill={color}
			/>
		</svg>
	)
}

export default memo(ShareIcon)
