describe('MainPage Tests', () => {
    beforeEach(() => {
      cy.visit('/'); 
    });
  
    it('displays server status', () => {
      cy.contains('Server Status').should('be.visible');
    });
  
    it('loads hot products', () => {
      cy.contains('Hot products').should('be.visible');
    });
  
    it('loads popular categories', () => {
      cy.contains('Popular categories').should('be.visible');
    });
  
    it('loads profiles', () => {
      cy.contains('Recommended profiles').should('be.visible');
    });
  });
  