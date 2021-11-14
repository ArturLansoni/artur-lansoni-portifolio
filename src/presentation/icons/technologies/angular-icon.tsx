import { memo } from 'react'
import { IconProps } from '@/presentation/protocols'

function AngularIcon({ width = 16, height = 16, color = '#DD0031' }: IconProps) {
	return (
		<svg
			width={width}
			height={height}
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M9.93 12.645h4.134L11.996 7.74 9.93 12.645zM11.996.009L.686 3.988l1.725 14.76 9.585 5.243 9.588-5.238L23.308 3.99 11.996.01V.009zm7.058 18.297h-2.636l-1.42-3.501H8.995l-1.42 3.501H4.937l7.06-15.648 7.057 15.648z'
				fill={color}
			/>
		</svg>
	)
}

export default memo(AngularIcon)
