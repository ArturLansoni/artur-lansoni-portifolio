import { memo } from 'react'
import Head from 'next/head'
import { SeoModel } from '@/domain/models'
import { useGlobal } from '@/presentation/context'

type Props = {
	params: SeoModel
	isArticle?: boolean
}

function Seo({ params, isArticle = false }: Props) {
	const { defaultSeo, siteName } = useGlobal()
	const seoWithDefaults = {
		...defaultSeo,
		...params
	}

	const fullSeo = {
		...seoWithDefaults,
		metaTitle: `${seoWithDefaults.metaTitle} | ${siteName}`
	}

	return (
		<Head>
			{fullSeo?.metaTitle && (
				<>
					<title>{fullSeo.metaTitle}</title>
					<meta property='og:title' content={fullSeo.metaTitle} />
					<meta name='twitter:title' content={fullSeo.metaTitle} />
				</>
			)}
			{fullSeo?.metaDescription && (
				<>
					<meta name='description' content={fullSeo.metaDescription} />
					<meta property='og:description' content={fullSeo.metaDescription} />
					<meta name='twitter:description' content={fullSeo.metaDescription} />
				</>
			)}
			{fullSeo?.metaImage?.url && (
				<>
					<meta property='og:image' content={fullSeo.metaImage.url} />
					<meta name='twitter:image' content={fullSeo.metaImage.url} />
					<meta name='image' content={fullSeo.metaImage.url} />
				</>
			)}
			{isArticle && <meta property='og:type' content='article' />}
			<meta name='twitter:card' content='summary_large_image' />
		</Head>
	)
}

export default memo(Seo)
