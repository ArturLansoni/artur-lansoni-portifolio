import { memo } from 'react'
import { IconProps } from '@/presentation/protocols'

function StrapiIcon({ width = 16, height = 16, color = '#2F2E8B' }: IconProps) {
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
					d='M7.684 0v8.035h7.775c.28 0 .502.236.502.483v7.802h8.025V.502A.502.502 0 0023.484 0h-15.8zm-.5.5L.086 7.607a.251.251 0 00.178.428h6.92V.5zm.5 8.035v7.283c0 .278.224.502.502.502h7.275V9.018c0-.278-.224-.482-.502-.483H7.684zm8.277 8.285v6.928c0 .224.271.336.43.178l7.095-7.106h-7.525z'
					fill={color}
				/>
			</g>
		</svg>
	)
}

export default memo(StrapiIcon)
