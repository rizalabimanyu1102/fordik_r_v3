describe('Login Flow (CI Safe)', () => {
  it('should login successfully', () => {
    // 1. PAKSA request login sukses
    cy.intercept('POST', '**/login', {
      statusCode: 200,
      body: {
        token: 'fake-token',
        user: { email: 'qazqaz@qazqaz.com' },
      },
    }).as('login');

    // 2. Buka halaman login
    cy.visit('http://localhost:5173/login');

    // 3. Isi form
    cy.get('input[placeholder="EMAIL"]').type('qazqaz@qazqaz.com');
    cy.get('input[placeholder="KATA SANDI"]').type('qazqazqaz');

    // 4. Klik login
    cy.contains('Login').click();

    // 5. Pastikan request login terpanggil
    cy.wait('@login');

    // 6. Pastikan redirect ke /
    cy.location('pathname', { timeout: 10000 }).should('eq', '/');
  });
});
