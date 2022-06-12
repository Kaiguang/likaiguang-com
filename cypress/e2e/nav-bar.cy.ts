describe('Nav bar tests', () => {
  it('Navigate to different pages', () => {
    cy.visit('/');

    cy.contains('projects').click();
    cy.url().should('include', '/projects');

    cy.contains('contact').click();
    cy.url().should('include', '/contact');

    cy.get('a[href="/notes"]').click();
    cy.url().should('include', '/notes');
  });
});
