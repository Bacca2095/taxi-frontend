/// <reference types="Cypress"/>

describe('Flujo para crear una carrera', () => {
  it('Crear carrera', () => {
    const date = new Date();
    date.setHours(date.getHours() + 2);
    date.setFullYear(date.getFullYear() + 1);
    cy.intercept('GET', 'http://localhost:3001/api/carreras/12345', {
      fixture: '../fixtures/careers.json',
    }).as('listCareer');
    cy.intercept('DELETE', 'http://localhost:3001/api/carreras/1', {
      statusCode: 200,
    }).as('deleteCareer');
    cy.visit('http://localhost:3000');
    cy.get('[data-testid="input-login-document"]').clear().type(12345);
    cy.get('[data-testid="login"]').click();
    cy.get('[data-id="1"]').click();
    cy.get('[data-testid="delete"]').click();
    cy.get('[data-testid="dialog-delete-button"]').click();
  });
});
