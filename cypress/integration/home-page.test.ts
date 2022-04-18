describe('Home page test', () => {
  it('Shows my name in the heading', () => {
    cy.visit('/');
    cy.get('h1').contains('Kaiguang Li');
  });
});
