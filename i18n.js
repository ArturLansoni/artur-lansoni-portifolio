module.exports = {
	locales: ['en', 'pt'],
	defaultLocale: 'en',
	loadLocaleFrom: (lang, ns) =>
		import(`./src/presentation/locales/${lang}/${ns}.json`).then(m => m.default),
	pages: {
		'*': ['common'],
		'/': ['article'],
		'/article/[slug]': ['article']
	}
}
