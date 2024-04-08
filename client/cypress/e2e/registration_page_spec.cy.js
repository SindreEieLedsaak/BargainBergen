describe('RegistrationPage Tests', () => {
    beforeEach(() => {
      cy.visit('/register'); 
    });
  
    it('allows the user to enter their email', () => {
      cy.get('input[type="email"]').type('newuser@example.com');
      cy.get('input[type="email"]').should('have.value', 'newuser@example.com');
    });
  
    it('shows the Google sign-up button', () => {
      cy.contains('Google').should('be.visible');
    });
  
    it('shows the Facebook sign-up button', () => {
      cy.contains('Facebook').should('be.visible');
    });
  });
  