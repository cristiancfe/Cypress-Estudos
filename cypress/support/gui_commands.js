Cypress.Commands.add('login', (nome, senha) =>{
  cy.get('input[formcontrolname="userName"]').type(nome);
        cy.get('input[formcontrolname="password"]').type(senha, {log:false});
        cy.get('button[type="submit"]').click(); 
})
// o comando {log: false} omite a visualização da senha digitada na interface gráfica do cypress