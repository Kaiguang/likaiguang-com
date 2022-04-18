describe('Projects page test', () => {
  it('Shows correct content', () => {
    cy.visit('/projects');
    cy.contains('h1', "Kai's Projects");
    cy.get('h2').should('have.length.greaterThan', 3);
  });
});
