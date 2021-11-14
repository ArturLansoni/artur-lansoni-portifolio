import { memo } from 'react'
import { IconProps } from '@/presentation/protocols'

function UsaFlagIcon({ width = 16, height = 16 }: IconProps) {
	return (
		<svg
			fill='none'
			width={width}
			height={height}
			viewBox='0 0 32 32'
			xmlns='http://www.w3.org/2000/svg'
		>
			<g clipPath='url(#clip0)'>
				<path
					d='M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z'
					fill='#F0F0F0'
				/>
				<path
					d='M15.3044 16H32C32 14.5559 31.8075 13.1569 31.4488 11.8261H15.3044V16Z'
					fill='#D80027'
				/>
				<path
					d='M15.3044 7.65223H29.6516C28.6722 6.05397 27.4199 4.64129 25.9598 3.47829H15.3044V7.65223Z'
					fill='#D80027'
				/>
				<path
					d='M16 32C19.7655 32 23.2266 30.6986 25.9597 28.5218H6.04022C8.77335 30.6986 12.2344 32 16 32Z'
					fill='#D80027'
				/>
				<path
					d='M2.34833 24.3479H29.6516C30.4379 23.0648 31.0477 21.6623 31.4488 20.1739H0.551147C0.95221 21.6623 1.56202 23.0648 2.34833 24.3479Z'
					fill='#D80027'
				/>
				<path
					d='M7.4115 2.49863H8.86956L7.51331 3.48394L8.03137 5.07825L6.67519 4.09294L5.319 5.07825L5.7665 3.70094C4.57237 4.69562 3.52575 5.861 2.66325 7.1595H3.13044L2.26712 7.78669C2.13262 8.01106 2.00362 8.239 1.88 8.47031L2.29225 9.73913L1.52313 9.18031C1.33194 9.58537 1.15706 9.99956 0.999875 10.4224L1.45406 11.8204H3.13044L1.77419 12.8057L2.29225 14.4L0.936063 13.4147L0.123687 14.0049C0.042375 14.6586 0 15.3243 0 16H16C16 7.1635 16 6.12175 16 0C12.8393 0 9.89281 0.916875 7.4115 2.49863ZM8.03137 14.4L6.67519 13.4147L5.319 14.4L5.83706 12.8057L4.48081 11.8204H6.15719L6.67519 10.2261L7.19319 11.8204H8.86956L7.51331 12.8057L8.03137 14.4ZM7.51331 8.14481L8.03137 9.73913L6.67519 8.75381L5.319 9.73913L5.83706 8.14481L4.48081 7.1595H6.15719L6.67519 5.56519L7.19319 7.1595H8.86956L7.51331 8.14481ZM13.7705 14.4L12.4143 13.4147L11.0581 14.4L11.5762 12.8057L10.2199 11.8204H11.8963L12.4143 10.2261L12.9323 11.8204H14.6087L13.2524 12.8057L13.7705 14.4ZM13.2524 8.14481L13.7705 9.73913L12.4143 8.75381L11.0581 9.73913L11.5762 8.14481L10.2199 7.1595H11.8963L12.4143 5.56519L12.9323 7.1595H14.6087L13.2524 8.14481ZM13.2524 3.48394L13.7705 5.07825L12.4143 4.09294L11.0581 5.07825L11.5762 3.48394L10.2199 2.49863H11.8963L12.4143 0.904312L12.9323 2.49863H14.6087L13.2524 3.48394Z'
					fill='#0052B4'
				/>
			</g>
			<defs>
				<clipPath id='clip0'>
					<rect width='32' height='32' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)
}

export default memo(UsaFlagIcon)