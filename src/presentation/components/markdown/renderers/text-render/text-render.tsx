import type { HeadingProps } from 'react-markdown/lib/ast-to-react'
import { Text } from '@chakra-ui/layout'

export function PRender(props: HeadingProps) {
	return <Text {...props} lineHeight='1.5' fontSize='sm' />
}
