import { render, screen } from '@testing-library/react'
import { Footer } from '../../../presentation/components'

describe('Footer Component', () => {
	test('Should have correct LinkedIn link', () => {
		render(<Footer />)
		const signUpLink = screen.getByTestId('linkedin-link')
		expect(signUpLink).toHaveAttribute('href', 'https://www.linkedin.com/in/arturlansoni/')
	})
	test('Should have correct Twitter link', () => {
		render(<Footer />)
		const signUpLink = screen.getByTestId('twitter-link')
		expect(signUpLink).toHaveAttribute('href', 'https://twitter.com/ArturLansoni')
	})
	test('Should have correct Github link', () => {
		render(<Footer />)
		const signUpLink = screen.getByTestId('github-link')
		expect(signUpLink).toHaveAttribute('href', 'https://github.com/ArturLansoni')
	})
	test('Should have correct Gmail link', () => {
		render(<Footer />)
		const signUpLink = screen.getByTestId('gmail-link')
		expect(signUpLink).toHaveAttribute('href', 'mailto:arturlansoni@gmail.com')
	})
})
