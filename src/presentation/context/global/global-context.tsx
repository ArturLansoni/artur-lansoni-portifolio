import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { SeoModel } from '@/domain/models'

type StateProps = {
	defaultSeo?: SeoModel
	siteName: string
	translationUrl?: string
}

type Props = StateProps & {
	setTranslationUrl: (param: string) => void
}
type ProviderProps = {
	children: React.ReactNode
	initialProps: {
		defaultSeo?: SeoModel
		siteName: string
	}
}

const GlobalContext = createContext<Props>(null)

function GlobalProvider({ children, initialProps }: ProviderProps) {
	const [state, setState] = useState<StateProps>({
		defaultSeo: null,
		siteName: '',
		translationUrl: ''
	})

	useEffect(() => {
		setState(old => ({
			...old,
			...initialProps
		}))
	}, [initialProps])

	const setTranslationUrl = useCallback((value: string): void => {
		setState(old => ({ ...old, translationUrl: value }))
	}, [])

	return (
		<GlobalContext.Provider value={{ ...state, setTranslationUrl }}>
			{children}
		</GlobalContext.Provider>
	)
}

function useGlobal(): Props {
	const context = useContext(GlobalContext)
	if (!context) {
		throw new Error('useGlobal must be used within an GlobalProvider.')
	}
	return context
}

export { GlobalProvider, useGlobal }
