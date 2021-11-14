import useTranslation from 'next-translate/useTranslation'
import { LocaleLink } from '@/presentation/components'
import { useGlobal } from '@/presentation/context'
import { BrasilFlagIcon, UsaFlagIcon } from '@/presentation/icons'

function LocaleSwitcher() {
	const { lang } = useTranslation()
	const { translationUrl: url } = useGlobal()

	return (
		<>
			{!lang.includes('pt') && (
				<LocaleLink url={url} locale='pt'>
					<BrasilFlagIcon height={22} width={22} />
				</LocaleLink>
			)}
			{!lang.includes('en') && (
				<LocaleLink url={url} locale='en'>
					<UsaFlagIcon height={22} width={22} />
				</LocaleLink>
			)}
		</>
	)
}

export default LocaleSwitcher
