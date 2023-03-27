

describe('alura busca cursos', () => {
  
  beforeEach(() =>{
    cy.visit('https://www.alura.com.br');
  })

  it('buscar curso de java', () => {
    cy.get('#header-barraBusca-form-campoBusca').type('java');
    cy.get('.header-barraBusca-form-submit').click();
    cy.get('h4.busca-resultado-nome')
      .should('contain', 'Formação Certificação Java');
  })
  it('buscar por python', () => {
    cy.get('#header-barraBusca-form-campoBusca').type('Python');
    cy.get('.header-barraBusca-form-submit').click();
    cy.get('h4.busca-resultado-nome')
      .should('contain', 'Formação Estatística com Python');
  })
  it('buscar por QA', () => {
    cy.get('#header-barraBusca-form-campoBusca').type('QA');
    cy.get('.header-barraBusca-form-submit').click();
    cy.get('h4.busca-resultado-nome')
      .should('contain', 'Curso Quality Assurance: plano de testes e gestão de bugs');
  })
});