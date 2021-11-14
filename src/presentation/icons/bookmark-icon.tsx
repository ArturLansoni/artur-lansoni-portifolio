import { memo } from 'react'
import { IconProps } from '@/presentation/protocols'

function BookmarkIcon({ width = 16, height = 16, color = '#fff' }: IconProps) {
	return (
		<svg
			width={width}
			height={height}
			viewBox='0 0 16 16'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M3.333 1.333h9.334a.667.667 0 01.666.667v12.762a.334.334 0 01-.51.283L8 12.02l-4.823 3.024a.333.333 0 01-.51-.282V2a.667.667 0 01.666-.667zM12 2.667H4v10.288l4-2.508 4 2.508V2.667z'
				fill={color}
			/>
		</svg>
	)
}

export default memo(BookmarkIcon)
