import { memo } from 'react'
import { IconProps } from '@/presentation/protocols'

function LinkedInIcon({ width = 16, height = 16, color = '#0077B5' }: IconProps) {
	return (
		<svg
			width={width}
			height={height}
			viewBox='0 0 16 16'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M13.631 13.635h-2.369V9.922c0-.885-.018-2.025-1.235-2.025-1.235 0-1.424.964-1.424 1.96v3.778H6.234V6H8.51v1.04h.03c.319-.6 1.092-1.233 2.247-1.233 2.401 0 2.845 1.58 2.845 3.637v4.19zM3.558 4.955A1.375 1.375 0 012.183 3.58a1.376 1.376 0 111.375 1.377zm1.188 8.68H2.37V6h2.376v7.635zM14.816 0H1.182C.528 0 0 .516 0 1.153v13.694C0 15.485.528 16 1.18 16h13.635c.652 0 1.185-.515 1.185-1.153V1.153C16 .516 15.467 0 14.815 0h.002z'
				fill={color}
			/>
		</svg>
	)
}
export default memo(LinkedInIcon)
