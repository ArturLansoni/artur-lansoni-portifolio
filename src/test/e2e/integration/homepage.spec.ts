/// <reference types="cypress"/>
import * as Helpers from '../utils/helpers'

describe('Homepage', () => {
	beforeEach(() => {
		cy.visit('/')
	})
	it('Should present header', () => {
		cy.getByTestId('header-link').click()
		Helpers.testUrl('/')
	})
	it('Should change page language', () => {
		cy.getByTestId('locale-link').click()
		Helpers.testUrl('/pt')
	})
	it('Should have LinkedIn profile page link', () => {
		cy.getByTestId('linkedin-link').should('have.attr', 'target', '_blank')
		cy.getByTestId('linkedin-link').should(
			'have.attr',
			'href',
			'https://www.linkedin.com/in/arturlansoni/'
		)
	})
	it('Should have Twitter profile page link', () => {
		cy.getByTestId('twitter-link').should('have.attr', 'target', '_blank')
		cy.getByTestId('twitter-link').should(
			'have.attr',
			'href',
			'https://twitter.com/ArturLansoni'
		)
	})
	it('Should have Github profile page link', () => {
		cy.getByTestId('github-link').should('have.attr', 'target', '_blank')
		cy.getByTestId('github-link').should('have.attr', 'href', 'https://github.com/ArturLansoni')
	})
	it('Should have Gmail link', () => {
		cy.getByTestId('gmail-link').should('have.attr', 'target', '_blank')
		cy.getByTestId('gmail-link').should('have.attr', 'href', 'mailto:arturlansoni@gmail.com')
	})
	it('Should present survey items', () => {
		cy.get('li:nth-child(1)').then(li => {
			assert.isString(li.find('[data-testid="link"]').attr('href'))
			assert.isString(li.find('[data-testid="title"]').text())
			assert.isString(li.find('[data-testid="title"]').text(), 'First article mock')
			assert.isString(li.find('[data-testid="published-at"]').text(), 'Jan 01, 2021')
			assert.isString(li.find('[data-testid="reading-time"]').text(), '10 min read')
			assert.isTrue(Helpers.isUrl(li.find('[data-testid="image"]').attr('src')))
		})
	})
})
