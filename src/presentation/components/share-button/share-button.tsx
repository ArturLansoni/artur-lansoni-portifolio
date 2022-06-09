import { memo, useEffect, useState } from 'react'
import { LinkedInIcon, TwitterIcon, FacebookIcon } from '@/presentation/icons'
import { Flex, Link } from '@chakra-ui/layout'
import { IconContainer } from '..'

type Props = {
	title: string
	tags: string[]
}

function Share({ title, tags }: Props) {
	const [url, setUrl] = useState('')

	useEffect(() => {
		setUrl(window.location.href)
	}, [])

	const getTitle = `${title} by Artur Lansoni`
	const getTags = tags.map(slug => String(slug).replace('-', '')).join(',')

	return (
		<Flex direction='row' align='center' gap={2}>
			<Link
				href={`https://twitter.com/intent/tweet?url=${url}&text=${getTitle}&hashtags=${getTags}`}
				aria-label='Twitter share link'
				target='_blank'
				rel='noopener noreferrer'
			>
				<IconContainer>
					<TwitterIcon />
				</IconContainer>
			</Link>
			<Link
				href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${getTitle}&summary=${getTags}`}
				aria-label='LinkedIn share link'
				target='_blank'
				rel='noopener noreferrer'
			>
				<IconContainer>
					<LinkedInIcon />
				</IconContainer>
			</Link>
			<Link
				href={`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${getTitle}&hashtag=${getTags}`}
				aria-label='Facebook share link'
				target='_blank'
				rel='noopener noreferrer'
			>
				<IconContainer>
					<FacebookIcon />
				</IconContainer>
			</Link>
		</Flex>
	)
}

export default memo(Share)
