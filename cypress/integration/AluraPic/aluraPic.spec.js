
describe('alura PIC', () => {
  
  beforeEach(() =>{
    cy.visit('https://alura-fotos.herokuapp.com');
  })

  it('verificar mensagens de validação', () => {
    cy.contains('a', 'Register now').click();
    cy.contains('button', 'Register').click();
    cy.contains('ap-vmessage', 'Email is required').should('be.visible');
    cy.contains('button', 'Register').click();
    cy.contains('ap-vmessage', 'Full name is required').should('be.visible');
    cy.contains('ap-vmessage', 'User name is required').should('be.visible');
    cy.contains('ap-vmessage', 'Password is required').should('be.visible');
    cy.contains('h4', 'Register to embrace a new world!').should('be.visible')  
  }),

  it('verificar mensagens de email inválido', () => {
    cy.contains('a', 'Register now').click();
    cy.contains('button', 'Register').click();
    cy.get('input[formcontrolname="email"]').type('cristian');    
    cy.contains('ap-vmessage','Invalid e-mail').should('be.visible');
  }),

  it('verifica mensagem campo de Email não pode ser vazio', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="email"]').click().blur();
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
  }),

  it('verificar mensagens de nome completo - deve ter tamanho minimo de 2 caracteres', () => {
    cy.contains('a', 'Register now').click();
    cy.contains('button', 'Register').click();
    cy.get('input[formcontrolname="fullName"]').type('0');
    cy.contains('button', 'Register').click();    
    cy.contains('ap-vmessage','Mininum length is 2').should('be.visible');
  }),

  it('verifica mensagem campo nome completo não pode ser vazio', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="fullName"]').click().blur();
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
  }),

  it('verifica mensagem campo nome de usuário não pode ser vazio', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="userName"]').click().blur();
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
  }),

  it('verifica mensagem campo Nome de usuário indisponível', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="userName"]').type('flavio');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Username already taken').should('be.visible');
  }),

  it('verifica mensagem campo Nome de usuário deve ser em letras minúsculas', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="userName"]').type('Cristian');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Must be lower case').should('be.visible');
  }),

  it('verifica mensagem campo senha deve ter no minimo 8 caracteres', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="password"]').type('1234567');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');
  }),

  it('Fazer login com usuário válido', () => {
        cy.get('input[formcontrolname="userName"]').type('flavio');
        cy.get('input[formcontrolname="password"]').type('123');
        cy.get('button[type="submit"]').click(); 
        cy.contains('a', '(Logout)').should('be.visible');       
  }),

  it('Fazer login com usuário Inválido', () => {
        cy.login('cristian', '1234')
        cy.on ('window:alert', (str) =>{
          expect(str).to.equal('Invalid user name or password')
  })

  })  

   //comandos prontos
it ('Fazer cadastro de novo usuário válido', () => {
  cy.registrar('teste@gmail.com','eisenhut','erfb','12345678');
  cy.contains('button', 'Register').click();
        
})   

const usuarios =require('../../fixtures/usuarios.json');
usuarios.forEach(usuario =>{
      it('registrar novo usuario ' + usuario.userName, () => {      
            cy.contains('a', 'Register now').click();
            cy.contains('button', 'Register').click();
            cy.get('input[formcontrolname="email"]').type(usuario.email);
            cy.get('input[formcontrolname="fullName"]').type(usuario.fullName);
            cy.get('input[formcontrolname="userName"]').type(usuario.userName);
            cy.get('input[formcontrolname="password"]').type(usuario.password);
            cy.contains('button', 'Register').click();
      }) 
})

});