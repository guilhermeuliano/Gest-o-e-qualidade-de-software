/// <reference types="Cypress"/>

describe('Teste para visualizar produto', () => {
  it('Visualizar o produto Camiseta', () => {
    cy.visit('https://automationexercise.com/');
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
    cy.get('#search_product').type('t-shirts');
    cy.get('#submit_search').click();
    cy.get('.choose > .nav > li > a').click();
  });
});
