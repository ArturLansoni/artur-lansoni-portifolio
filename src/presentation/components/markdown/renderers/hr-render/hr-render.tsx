import type { ComponentPropsWithoutRef } from 'react-markdown/lib/ast-to-react'
import { Flex } from '@chakra-ui/layout'

export function HrRender(props: ComponentPropsWithoutRef<'hr'>) {
	return <Flex {...props} my={2} border={0} borderTop='1px solid gray' />
}
