import type { LiProps } from 'react-markdown/lib/ast-to-react'
import { ListItem, UnorderedList } from '@chakra-ui/layout'

export function LiRender(props: LiProps) {
	return (
		<UnorderedList>
			<ListItem {...props} lineHeight='1.5' styletype='inside' />
		</UnorderedList>
	)
}
