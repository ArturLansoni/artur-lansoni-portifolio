import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { Box, Image, ListItem, Text, UnorderedList } from '@chakra-ui/react'

const RenderComponents = {
	code({ inline, children, ...props }) {
		const match = /language-(\w+)/

		return !inline && match ? (
			<SyntaxHighlighter
				style={dracula}
				language={match[1]}
				PreTag='div'
				showLineNumbers
				{...props}
			>
				{String(children).replace(/\n$/, '')}
				{match[1]}
			</SyntaxHighlighter>
		) : (
			<code {...props}>{children}</code>
		)
	},
	h2({ children, ...props }) {
		return (
			<Text fontSize='2xl' fontWeight='bold' {...props}>
				{children}
			</Text>
		)
	},
	h3({ children, ...props }) {
		return (
			<Text fontSize='xl' fontWeight='bold' {...props}>
				{children}
			</Text>
		)
	},
	hr({ ...props }) {
		return (
			<Box
				marginTop='1rem'
				marginBottom='1rem'
				border={0}
				borderTop='1px solid rgba(255, 255, 255, 0.2)'
				{...props}
			/>
		)
	},
	img({ ...props }) {
		return <Image objectFit='contain' width='100%' {...props} />
	},
	li({ children, ...props }) {
		return (
			<UnorderedList>
				<ListItem ListStylePosition='inside' {...props}>
					{children}
				</ListItem>
			</UnorderedList>
		)
	}
}

export default RenderComponents
