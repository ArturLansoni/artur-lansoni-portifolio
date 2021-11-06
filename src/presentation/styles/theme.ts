import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
	colors: {
		primary: {
			500: '#dc785f',
			600: '#a64a35'
		},
		text: {
			500: '#ffffff',
			600: '#b8bdc3'
		},
		bg: {
			400: '#21212190',
			500: '#000000'
		}
	},
	shadows: {
		custom: 'rgba(255, 255, 255, 0.05) 0px 1px 0px 0px'
	},
	fonts: {
		heading: 'Roboto',
		body: 'Roboto'
	},
	styles: {
		global: {
			body: {
				bg: 'bg.500',
				color: 'text.500',
				bgImage: "url('/background-pattern.svg')",
				bgSize: 'cover',
				bgAttachment: 'fixed'
			}
		}
	}
})
