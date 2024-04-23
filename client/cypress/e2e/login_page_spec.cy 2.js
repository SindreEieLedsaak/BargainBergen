describe('LoginPage Tests', () => {
  beforeEach(() => {
    cy.visit('/login'); 
  });

  it('allows the user to enter their email', () => {
    cy.get('input[type="email"]').type('user@example.com');
    cy.get('input[type="email"]').should('have.value', 'user@example.com');
  });

  it('shows the Google sign-in button', () => {
    cy.contains('Sign in using Google').should('be.visible');
  });

  it('shows the Facebook sign-in button', () => {
    cy.contains('Sign in using Facebook').should('be.visible');
  });
});
