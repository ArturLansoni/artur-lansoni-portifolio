import { memo } from 'react'
import ReactMarkdown from 'react-markdown'
import { Box } from '@chakra-ui/react'
import rehypeRaw from 'rehype-raw'
import RenderComponents from './render-components'

type Props = {
	value: string
}

function Markdown({ value }: Props) {
	return (
		<Box lineHeight={1.5}>
			<ReactMarkdown components={RenderComponents as unknown} rehypePlugins={[rehypeRaw]}>
				{value}
			</ReactMarkdown>
		</Box>
	)
}

export default memo(Markdown)
