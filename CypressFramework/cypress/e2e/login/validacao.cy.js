/// <reference types="Cypress"/>

describe('Teste de validação', () => {
  it('Deve validar os campos obrigatórios', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    //login em branco
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.radius').click();
    cy.get('.flash.error').should('contain', 'Your username is invalid!');
    //senha em branco
    cy.get('#username').type('tomsmith');
    cy.get('.radius').click();
    cy.get('.flash.error').should('contain', 'Your password is invalid!');
  });
});
