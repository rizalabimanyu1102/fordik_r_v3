describe('Login Flow', () => {
  it('should login successfully', () => {
    cy.visit('/login');

    cy.get('input[placeholder="EMAIL"]').type('qazqaz@qazqaz.com');
    cy.get('input[placeholder="KATA SANDI"]').type('qazqazqaz');

    cy.contains('Login').click();

    cy.url().should('eq', '/');
  });
});
