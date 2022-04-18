describe('Notes page test', () => {
  it('Shows correct content', () => {
    cy.visit('/notes');
    cy.contains('h1', "Kai's Notes");
    cy.get('a').should('have.length.greaterThan', 10);
  });
});
