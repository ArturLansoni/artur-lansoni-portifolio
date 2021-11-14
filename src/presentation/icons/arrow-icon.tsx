import { memo } from 'react'
import { IconProps } from '@/presentation/protocols'

type Props = {
	direction?: 'up' | 'down' | 'left' | 'right'
} & IconProps

function ArrowIcon({ width = 16, height = 16, color = '#fff', direction = 'down' }: Props) {
	return (
		<svg
			width={width}
			height={height}
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path fill='none' d='M0 0h24v24H0z' />
			{direction === 'down' && (
				<path
					fill={color}
					d='M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z'
				/>
			)}
			{direction === 'up' && (
				<path
					fill={color}
					d='M12 10.828l-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414z'
				/>
			)}
			{direction === 'right' && (
				<path
					fill={color}
					d='M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z'
				/>
			)}
			{direction === 'left' && (
				<path
					fill={color}
					d='M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z'
				/>
			)}
		</svg>
	)
}

export default memo(ArrowIcon)
