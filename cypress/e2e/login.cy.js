describe('Login Flow', () => {
  it('should login successfully', () => {
    cy.visit('http://localhost:5173/login');

    cy.get('input[placeholder="EMAIL"]').type('qazqaz@qazqaz.com');
    cy.get('input[placeholder="KATA SANDI"]').type('qazqazqaz');

    cy.contains('Login').click();

    //qaz

    cy.url().should('eq', 'http://localhost:5173/');
  });
});
