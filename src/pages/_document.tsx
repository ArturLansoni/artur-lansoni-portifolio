import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
	render(): JSX.Element {
		return (
			<Html lang='pt-br'>
				<Head>
					<meta charSet='utf-8' />
					<meta name='theme-color' content='#212121e6' />
					<meta name='author' content='Artur Lansoni' />
					<link
						href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap'
						rel='stylesheet'
					/>

					<script crossOrigin='true' src='https://unpkg.com/axios/dist/axios.min.js' />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
