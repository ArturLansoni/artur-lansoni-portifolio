import React, { memo, useEffect, useState } from 'react'
import { IconContainer } from '@/presentation/components'
import { FacebookIcon, LinkedInIcon, TwitterIcon, WhatsappIcon } from '@/presentation/icons'
import { Flex } from '@chakra-ui/react'

type Props = {
	title: string
	tags: string[]
}

const Share: React.FC<Props> = ({ title, tags }: Props) => {
	const [url, setUrl] = useState('')

	useEffect(() => {
		setUrl(window.location.href)
	}, [])

	const getTitle = `${title} by Artur Lansoni`
	const getTags = tags.map(slug => String(slug).replace('-', '')).join(',')

	return (
		<Flex alignItems='center' columnGap={1} rowGap={1}>
			<IconContainer>
				<a
					href={`https://twitter.com/intent/tweet?url=${url}&text=${getTitle}&hashtags=${getTags}`}
					aria-label='Twitter share link'
					target='_blank'
					rel='noopener noreferrer'
				>
					<TwitterIcon />
				</a>
			</IconContainer>
			<IconContainer>
				<a
					href={`https://www.linkedin.com/shareArticle/?url=${url}&title=${getTitle}&summary=${getTags}`}
					aria-label='LinkedIn share link'
					target='_blank'
					rel='noopener noreferrer'
				>
					<LinkedInIcon />
				</a>
			</IconContainer>
			<IconContainer>
				<a
					href={`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${getTitle}&hashtag=${getTags}`}
					aria-label='Facebook share link'
					target='_blank'
					rel='noopener noreferrer'
				>
					<FacebookIcon />
				</a>
			</IconContainer>
			<IconContainer>
				<a
					href={`https://api.whatsapp.com/send?text=${getTitle} ${url}`}
					aria-label='Whatsapp share link'
					target='_blank'
					rel='noopener noreferrer'
				>
					<WhatsappIcon />
				</a>
			</IconContainer>
		</Flex>
	)
}

export default memo(Share)
