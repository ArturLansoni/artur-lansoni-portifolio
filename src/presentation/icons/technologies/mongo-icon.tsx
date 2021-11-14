import { memo } from 'react'
import { IconProps } from '@/presentation/protocols'

function MongoIcon({ width = 16, height = 16, color = '#47A248' }: IconProps) {
	return (
		<svg
			width={width}
			height={height}
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<g clipPath='url(#prefix__clip0)'>
				<path
					d='M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05c.129.952.239 1.906.33 2.862h.48a28.48 28.48 0 01.51-3.07c.418-.296.605-.463.85-.693a11.342 11.342 0 003.64-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z'
					fill={color}
				/>
			</g>
		</svg>
	)
}

export default memo(MongoIcon)
