import { memo } from 'react'
import { IconProps } from '@/presentation/protocols'

function VueMaterialIcon({ width = 16, height = 16, color = '' }: IconProps) {
	return (
		<svg
			width={width}
			height={height}
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path d='M15.6923 19.6923V4L0 19.6923H15.6923Z' fill={color || '#B2FF59'} />
			<path d='M15.6922 19.6924V12.5386L8.30762 19.6924H15.6922Z' fill={color || '#84FFFF'} />
			<path
				d='M24.0001 19.6923V4L15.6924 12.5385V19.6923H24.0001Z'
				fill={color || '#536DFE'}
			/>
		</svg>
	)
}

export default memo(VueMaterialIcon)
