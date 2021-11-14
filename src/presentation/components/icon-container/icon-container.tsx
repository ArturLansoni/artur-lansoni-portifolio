import { Flex, FlexProps } from '@chakra-ui/react'

function IconContainer({ children, ...props }: FlexProps) {
	return (
		<Flex
			minH={8}
			p={2}
			cursor='pointer'
			color='text.500'
			borderRadius='xl'
			bg='transparent'
			align='center'
			direction='row'
			pos='relative'
			userSelect='none'
			fontSize={3}
			sx={{ transition: 'background-color 200ms linear' }}
			_hover={{ bg: 'bg.500' }}
			{...props}
		>
			{children}
		</Flex>
	)
}

export default IconContainer
