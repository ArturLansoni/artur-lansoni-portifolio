import { memo } from 'react'
import setLanguage from 'next-translate/setLanguage'
import Link from 'next/link'
import { IconContainer } from '@/presentation/components'

type Props = {
	url?: string
	locale: string
	children: React.ReactNode
}

function LocaleLink({ url, locale, children }: Props) {
	if (url)
		return (
			<Link href={url} locale={locale} data-testid='locale-link'>
				<IconContainer onClick={async () => await setLanguage(locale)}>
					{children}
				</IconContainer>
			</Link>
		)

	return (
		<IconContainer data-testid='locale-link' onClick={async () => await setLanguage(locale)}>
			{children}
		</IconContainer>
	)
}

export default memo(LocaleLink)
