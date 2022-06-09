/* eslint-disable react/no-children-prop */
import { memo } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import rehypeSanitize from 'rehype-sanitize'
import renderers from './renderers'

type Props = {
	value: string
}

function Markdown({ value }: Props) {
	return (
		<ReactMarkdown
			components={renderers}
			rehypePlugins={[rehypeRaw, rehypeSanitize]}
			className='markdown-container'
			children={value}
		/>
	)
}

export default memo(Markdown)
