Se utilizar o comando blur(); após o click
não precisa utilizar a linha 
cy.contains('button', 'Register').click();
para tirar o foco e fazer aparecer a mensagem de erro 
ajuda a diminuir as linhas de código

exemplos de códigos para formulário com validação
 
describe('Login e registro de usuarios alura pic', () => {

    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com');
    })

    it('verifica mensagens validacao', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
    })

    it('verifica mensagem de e-mail invalido', () => {
        cy.contains('a', 'Register now').click();
        cy.get('input[formcontrolname="email"]').type('samircd9').blur();
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');
    })

    it('verifica mensagem de campo nome limite maximo 40 caracteres', () => {
        cy.contains('a', 'Register now').click();
        cy.get('input[formcontrolname="fullName"]').type('samirsamirsamirsamirsamirsamirsamirsamir1').blur();
        cy.contains('ap-vmessage', 'Maximun length is 40').should('be.visible');
    })

    it('verifica mensagem de campo nome nao pode ser vazio', () => {
        cy.contains('a', 'Register now').click();
        cy.get('input[formcontrolname="fullName"]').click().blur();
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
    })

    it('verifica mensagem de campo nome deve ter no minimo 2 caracteres', () => {
        cy.contains('a', 'Register now').click();
        cy.get('input[formcontrolname="fullName"]').type('h').blur();
        cy.contains('ap-vmessage', 'Mininum length is 2').should('be.visible');
    })

    it('verifica mensagem de campo user name limite maximo 30 caracteres', () => {
        cy.contains('a', 'Register now').click();
        cy.get('input[formcontrolname="userName"]').type('samirsamirsamirsamirsamirsamir1').blur();
        cy.contains('ap-vmessage', 'Maximun length is 30').should('be.visible');
    })

    it('verifica mensagem de campo user name deve ter no minimo 2 caracteres', () => {
        cy.contains('a', 'Register now').click();
        cy.get('input[formcontrolname="userName"]').type('h').blur();
        cy.contains('ap-vmessage', 'Mininum length is 2').should('be.visible');
    })

    it('verifica mensagem de campo user name deve ser em minusculo', () => {
        cy.contains('a', 'Register now').click();
        cy.get('input[formcontrolname="userName"]').type('Hamade').blur();
        cy.contains('ap-vmessage', 'Must be lower case').should('be.visible');
    })

    it('verifica mensagem de campo user name nao pode ser vazio', () => {
        cy.contains('a', 'Register now').click();
        cy.get('input[formcontrolname="userName"]').click().blur();
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
    })

    it('verifica mensagem de campo password nao pode ser vazio', () => {
        cy.contains('a', 'Register now').click();
        cy.get('input[formcontrolname="password"]').click().blur();
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
    })

    it('verifica mensagem de campo password minimo 8 caracteres', () => {
        cy.contains('a', 'Register now').click();
        cy.get('input[formcontrolname="password"]').type('1234567').blur();
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');
    })

    it('verifica mensagem de campo password maximo de 18 caracteres', () => {
        cy.contains('a', 'Register now').click();
        cy.get('input[formcontrolname="password"]').type('123456789123456789').blur();
        cy.contains('ap-vmessage', 'Maximun length is 18').should('be.visible');
    })

    // a mensagem 'Maximun length is 18' já aparece mesmo se digitar apenas 15 caracteres
    // esse teste vai falhar, pois o tamanho máximo na verdade é 14
    it.only('verifica mensagem de campo password com 15 caracteres', () => {
        cy.contains('a', 'Register now').click();
        cy.get('input[formcontrolname="password"]').type('123456789123456').blur();
        cy.contains('ap-vmessage', 'Maximun length is 18').should('not.be.visible');
    })
 
    comandos 
    npm run test - abre a interface do cypress
    npx cypress open - abre a interface do cypress
    npx cypress run - roda em modo headless
    add only - roda testes selecionados
    npx cypress run --reporter mochawesome - gera relatório com mochawesome
    quando incluimos o parâmetro {logs: false} na função que faz a digitação da senha, para não mostrar na interface gráfica do cypress o valor digitado

    conceitos 
    Flaky tests - testes que ora falham e ora passam , ex: testar tempo de resposta , dependendo do tempo setado e da resposta, pode falhar ou passar .
    
     *** Gerar relatorio com allure ***
     **** npm run test e depois npx allure serve allure-results ****
})

