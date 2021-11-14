import { memo } from 'react'
import { IconProps } from '@/presentation/protocols'

function CommentIcon({ width = 16, height = 16, color = '#fff' }: IconProps) {
	return (
		<svg
			width={width}
			height={height}
			viewBox='0 0 16 16'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M4.86 13.883l-3.527.784.785-3.528a6.667 6.667 0 112.743 2.743zm.194-1.41l.435.234a5.333 5.333 0 10-2.196-2.197l.233.436-.436 1.965 1.964-.437z'
				fill={color}
			/>
		</svg>
	)
}

export default memo(CommentIcon)
