/// <reference types="Cypress"/>

describe('Flujo para ingresar a la app', () => {
  it('Ingreso', () => {
    cy.intercept('GET', 'http://localhost:3001/api/carreras/12345', {
      fixture: '../fixtures/careers.json',
    }).as('listCareer');
    cy.visit('http://localhost:3000');
    cy.get('[data-testid="input-login-document"]').clear().type(12345);
    cy.get('[data-testid="login"]').click();
  });
});
