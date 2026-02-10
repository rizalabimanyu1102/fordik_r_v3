describe('Login Flow', () => {
  it('should login successfully', () => {
    cy.visit('https://fordik-r-v3.vercel.app/login');

    cy.get('input[placeholder="EMAIL"]').type('qazqaz@qazqaz.com');
    cy.get('input[placeholder="KATA SANDI"]').type('qazqazqaz');

    cy.contains('Login').click();

    //dadsa

    cy.location('pathname').should('eq', 'https://fordik-r-v3.vercel.app/');
  });
});
