import { memo } from 'react'

function Logo() {
	return (
		<svg
			width={58}
			height={32}
			viewBox='0 0 58 32'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<rect width={57.6} height={32} rx={10} fill='#DC785F' />
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M10 32h37.6a9.999 9.999 0 008.845-5.331c-2.608-3.755-9.754-2.486-22.782-.175-1.276.227-2.609.463-4 .706C11.257 30.414 2.353 24.416.39 7.224a9.974 9.974 0 00-.373 2.191v13.17C.32 27.835 4.674 32 10 32z'
				fill='#A64A35'
			/>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M57.6 20.761V10c0-5.523-4.477-10-10-10H10a9.982 9.982 0 00-7.863 3.821C8.236 9.962 30.674 8.27 41.76 6.08 52.58 3.943 56.258 7.276 57.6 20.76z'
				fill='#FFA88D'
			/>
			<g filter='url(#prefix__filter0_d)'>
				<path
					d='M25.889 19.527l-3.199-3.553 3.199-3.553a.968.968 0 000-1.275.752.752 0 00-1.148 0l-3.765 4.181a.98.98 0 000 1.285l3.765 4.19a.752.752 0 001.148 0 .968.968 0 000-1.275zm5.413 0l3.2-3.553-3.2-3.553a.967.967 0 010-1.275.752.752 0 011.149 0l3.765 4.181a.98.98 0 010 1.285l-3.765 4.19a.752.752 0 01-1.149 0 .967.967 0 010-1.275z'
					fill='#212121'
				/>
			</g>
			<defs>
				<filter
					id='prefix__filter0_d'
					x={20.736}
					y={10.88}
					width={16.72}
					height={11.189}
					filterUnits='userSpaceOnUse'
					colorInterpolationFilters='sRGB'
				>
					<feFlood floodOpacity={0} result='BackgroundImageFix' />
					<feColorMatrix
						in='SourceAlpha'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
					/>
					<feOffset dx={1} dy={1} />
					<feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0' />
					<feBlend in2='BackgroundImageFix' result='effect1_dropShadow' />
					<feBlend in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
				</filter>
			</defs>
		</svg>
	)
}

export default memo(Logo)
