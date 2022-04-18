describe('Contact page test', () => {
  it('Shows correct content', () => {
    cy.visit('/contact');
    cy.contains('Kaiguang Li');
    cy.contains('hello@likaiguang.com');
    cy.get('a').should('have.length.greaterThan', 2);
  });
});
