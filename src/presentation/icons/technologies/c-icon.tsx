import { memo } from 'react'
import { IconProps } from '@/presentation/protocols'

function CIcon({ width = 16, height = 16, color = '#A8B9CC' }: IconProps) {
	return (
		<svg
			width={width}
			height={height}
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M16.592 9.196s-.354-3.298-3.627-3.39c-3.274-.09-4.956 2.474-4.956 6.14 0 3.665 1.858 6.597 5.046 6.597 3.183 0 3.538-3.665 3.538-3.665l6.104.365s.36 3.31-2.196 5.836c-2.552 2.524-5.69 2.938-7.877 2.92-2.19-.016-5.226.035-8.16-2.97-2.938-3.01-3.436-5.93-3.436-8.8 0-2.87.556-6.67 4.047-9.55C7.444.72 9.85 0 12.254 0 22.296 0 22.97 9.26 22.97 9.26l-6.38-.064z'
				fill={color}
			/>
		</svg>
	)
}

export default memo(CIcon)
