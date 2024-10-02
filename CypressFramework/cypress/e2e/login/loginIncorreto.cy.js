/// <reference types="Cypress"/>

describe('Teste de login com credenciais incorretas', () => {
  it('Exibir erro com credenciais incorretas', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('#username').type('tomsmith1');
    cy.get('#password').type('SuperSecretPassword');
    cy.get('.radius').click();
    cy.get('.flash.error').should('contain', 'Your username is invalid!');
  });
});
