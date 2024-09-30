/// <reference types="Cypress"/>

describe('Teste de login', () => {
  it('Realizar o login com sucesso', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.radius').click();
    cy.get('#flash').should('contain', 'You logged into a secure area!');
  });
});
