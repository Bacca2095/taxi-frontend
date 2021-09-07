/// <reference types="Cypress"/>

describe('Flujo para crear una carrera', () => {
  it('Crear carrera', () => {
    const date = new Date();
    date.setHours(date.getHours() + 2);
    date.setFullYear(date.getFullYear() + 1);
    cy.intercept('GET', 'http://localhost:3001/api/carreras/12345', {
      fixture: '../fixtures/careers.json',
    }).as('listCareer');
    cy.intercept('POST', 'http://localhost:3001/api/carreras', {
      statusCode: 201,
    }).as('createCareer');
    cy.visit('http://localhost:3000');
    cy.get('[data-testid="input-login-document"]').clear().type(12345);
    cy.get('[data-testid="login"]').click();
    cy.get('[data-testid="create"]').click();
    cy.get('[data-testid="input-name"]').clear().type('test');
    cy.get('[data-testid="input-phone"]').clear().type(12345);
    cy.get('[data-testid="input-address"]').clear().type('calle test');
    cy.get('[data-testid="dialog-create-submit"]').click();
  });
});
