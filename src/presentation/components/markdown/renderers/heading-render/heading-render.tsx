import type { HeadingProps } from 'react-markdown/lib/ast-to-react'
import { Heading } from '@chakra-ui/layout'

export function H2Render(props: HeadingProps) {
	return <Heading {...props} size='lg' lineHeight='1.5' />
}

export function H3Render(props: HeadingProps) {
	return <Heading {...props} size='md' lineHeight='1.5' />
}
