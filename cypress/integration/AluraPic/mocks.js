describe('alura PIC', () => {
  
  beforeEach(() =>{
    cy.visit('/');

    cy.intercept('POST', 'https://apialurapic.herokuapp.com/user/login', {
      statusCode:400
    }).as('stubPost')
  })

  it('Login com usuário válido usando mock', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'))
        cy.wait('@stubPost')
        cy.contains('a', '(Logout)').should('be.visible');       
  })
});