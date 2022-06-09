import CodeRender from './code-render/code-render'
import { H2Render, H3Render } from './heading-render/heading-render'
import { HrRender } from './hr-render/hr-render'
import { ImgRender } from './image-render/image-render'
import { LiRender } from './list-render/list-render'
import { PRender } from './text-render/text-render'

const renderers = {
	h2: H2Render,
	h3: H3Render,
	p: PRender,
	li: LiRender,
	code: CodeRender,
	img: ImgRender,
	hr: HrRender
}

export default renderers
