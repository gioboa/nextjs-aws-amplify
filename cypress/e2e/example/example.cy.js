/// <reference types="cypress" />

context('Dummy example', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000');
	});

	it('Check title', () => {
		cy.title().should('eq', 'Next.js Amplify')
	});
});
