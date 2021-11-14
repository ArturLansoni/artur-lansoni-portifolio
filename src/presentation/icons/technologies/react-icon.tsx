import { memo } from 'react'
import { IconProps } from '@/presentation/protocols'

function ReactIcon({ width = 16, height = 16, color = '#61DAFB' }: IconProps) {
	return (
		<svg
			width={width}
			height={height}
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M14.23 12.004C14.23 12.5968 13.9946 13.1654 13.5754 13.5847C13.1563 14.004 12.5879 14.2397 11.995 14.24C11.402 14.24 10.8332 14.0044 10.4139 13.5851C9.99458 13.1657 9.759 12.597 9.759 12.004C9.759 11.4111 9.99444 10.8425 10.4136 10.4232C10.8327 10.0039 11.4011 9.76823 11.994 9.76796C12.587 9.76796 13.1558 10.0035 13.5751 10.4229C13.9944 10.8422 14.23 11.4109 14.23 12.004V12.004ZM16.878 1.31396C15.532 1.31396 13.771 2.27397 11.99 3.93597C10.21 2.28297 8.448 1.33396 7.103 1.33396C6.693 1.33396 6.32 1.42696 5.997 1.61196C4.622 2.40496 4.314 4.87596 5.024 7.97696C1.98 8.91696 0 10.42 0 12.004C0 13.594 1.99 15.101 5.043 16.034C4.339 19.147 4.653 21.622 6.031 22.414C6.351 22.601 6.721 22.689 7.133 22.689C8.478 22.689 10.24 21.729 12.021 20.065C13.801 21.719 15.563 22.668 16.908 22.668C17.318 22.668 17.691 22.578 18.014 22.393C19.388 21.601 19.697 19.13 18.987 16.028C22.02 15.096 24 13.59 24 12.004C24 10.414 22.01 8.90696 18.957 7.97196C19.661 4.86196 19.347 2.38496 17.969 1.59196C17.651 1.40796 17.281 1.31496 16.877 1.31396H16.878ZM16.873 2.40396V2.40996C17.098 2.40996 17.279 2.45396 17.431 2.53696C18.097 2.91896 18.386 4.37196 18.161 6.24096C18.107 6.70096 18.019 7.18596 17.911 7.68096C16.951 7.44496 15.905 7.26396 14.804 7.14696C14.144 6.24196 13.459 5.41996 12.769 4.69996C14.361 3.21996 15.856 2.40796 16.874 2.40496L16.873 2.40396ZM7.103 2.42396C8.115 2.42396 9.617 3.23196 11.213 4.70396C10.527 5.42396 9.843 6.24096 9.193 7.14596C8.086 7.26296 7.039 7.44396 6.08 7.68396C5.968 7.19396 5.885 6.71996 5.826 6.26396C5.596 4.39596 5.88 2.94396 6.54 2.55696C6.73 2.46696 6.94 2.42996 7.103 2.42496V2.42396ZM11.985 5.47396C12.44 5.94196 12.895 6.46596 13.345 7.03796C12.905 7.01796 12.455 7.00396 12 7.00396C11.54 7.00396 11.085 7.01396 10.64 7.03796C11.08 6.46596 11.535 5.94196 11.985 5.47296V5.47396ZM12 8.09997C12.74 8.09997 13.477 8.13396 14.202 8.19296C14.608 8.77496 15.004 9.39597 15.385 10.053C15.757 10.693 16.095 11.343 16.403 11.999C16.095 12.654 15.757 13.309 15.39 13.949C15.01 14.609 14.617 15.237 14.21 15.819C13.482 15.882 12.744 15.917 12 15.917C11.26 15.917 10.523 15.882 9.798 15.824C9.392 15.242 8.996 14.62 8.615 13.964C8.243 13.324 7.905 12.674 7.597 12.018C7.9 11.361 8.243 10.705 8.61 10.064C8.99 9.40396 9.383 8.77796 9.79 8.19596C10.518 8.13196 11.256 8.09796 12 8.09796V8.09997ZM8.365 8.35396C8.125 8.73096 7.885 9.11696 7.661 9.51396C7.436 9.90396 7.226 10.296 7.026 10.688C6.761 10.032 6.536 9.37796 6.35 8.74096C6.99 8.59096 7.665 8.45796 8.365 8.35496V8.35396ZM15.625 8.35396C16.32 8.45696 16.99 8.58396 17.631 8.74096C17.451 9.37296 17.226 10.023 16.971 10.674C16.771 10.284 16.561 9.89096 16.331 9.49996C16.106 9.10796 15.866 8.72596 15.626 8.35396H15.625ZM18.688 9.02896C19.172 9.17897 19.632 9.34597 20.063 9.52697C21.795 10.267 22.915 11.235 22.915 12.003C22.91 12.771 21.79 13.743 20.058 14.478C19.638 14.658 19.178 14.82 18.703 14.971C18.423 14.013 18.057 13.015 17.603 11.991C18.053 10.974 18.413 9.98097 18.688 9.02697V9.02896ZM5.293 9.03296C5.571 9.99296 5.938 10.99 6.393 12.013C5.943 13.03 5.581 14.023 5.307 14.977C4.823 14.827 4.363 14.659 3.937 14.477C2.205 13.74 1.085 12.771 1.085 12.003C1.085 11.235 2.205 10.261 3.937 9.52697C4.357 9.34697 4.817 9.18496 5.293 9.03296V9.03296ZM16.971 13.313C17.236 13.97 17.461 14.625 17.647 15.261C17.007 15.418 16.331 15.551 15.631 15.651C15.871 15.276 16.111 14.889 16.336 14.493C16.561 14.103 16.771 13.705 16.972 13.313H16.971ZM7.026 13.333C7.226 13.725 7.436 14.116 7.666 14.508C7.896 14.898 8.131 15.28 8.371 15.651C7.676 15.549 7.006 15.421 6.365 15.265C6.545 14.635 6.771 13.983 7.025 13.332L7.026 13.333ZM17.92 16.32C18.032 16.813 18.12 17.288 18.174 17.743C18.404 19.611 18.12 21.063 17.46 21.451C17.313 21.541 17.122 21.579 16.897 21.579C15.885 21.579 14.383 20.772 12.787 19.299C13.473 18.579 14.157 17.763 14.807 16.859C15.914 16.741 16.961 16.559 17.92 16.319V16.32ZM6.09 16.33C7.05 16.564 8.096 16.745 9.197 16.862C9.857 17.767 10.542 18.589 11.232 19.308C9.637 20.791 8.14 21.603 7.122 21.603C6.902 21.598 6.716 21.553 6.569 21.471C5.903 21.091 5.614 19.637 5.839 17.768C5.893 17.308 5.981 16.824 6.089 16.33H6.09ZM10.65 16.97C11.09 16.99 11.54 17.004 11.995 17.004C12.455 17.004 12.91 16.994 13.355 16.97C12.915 17.542 12.46 18.065 12.01 18.535C11.555 18.065 11.1 17.542 10.65 16.97Z'
				fill={color}
			/>
		</svg>
	)
}

export default memo(ReactIcon)