Cypress.Commands.add('registrar', (email,fullName, userName, password) =>{
  cy.contains('a','Register now').click();
  cy.contains('button','Register').click();
  cy.get('input[formcontrolname="email"]').type(email);
  cy.get('input[formcontrolname="fullName"]').type(fullName);
  cy.get('input[formcontrolname="userName"]').type(userName);
  cy.get('input[formcontrolname="password"]').type(password);
  cy.contains('button','Register').click();  
})