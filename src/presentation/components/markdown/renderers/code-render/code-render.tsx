/* eslint-disable react/no-children-prop */
import { memo } from 'react'
import type { CodeProps as CProps } from 'react-markdown/lib/ast-to-react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'

type CodeProps = CProps & {
	language: string
	value: unknown
}

function CodeRender(props: CodeProps) {
	return <SyntaxHighlighter {...props} style={dracula} showLineNumbers wrapLongLines />
}

export default memo(CodeRender)
