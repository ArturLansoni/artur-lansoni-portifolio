import { Image } from '@chakra-ui/image'

export function ImgRender(props: { src: string; title: string }) {
	return <Image {...props} fit='contain' w='100%' />
}
