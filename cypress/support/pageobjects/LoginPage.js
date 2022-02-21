const url = Cypress.config("baseUrl")

    class LoginPage{
        acessarSite(){
            cy.visit(url)
        }
        ClicarLogin(){
            cy.contains('Login').click({force: true})
        }
        preencheremailsenha(){
            cy.get('[_ngcontent-serverapp-c178=""][type="email"] > #email').type('herculano.san@gmail.com')
            cy.get('[_ngcontent-serverapp-c178=""][type="password"] > #password').type('aqlp1289')
        }
        clicarentrar(){
            cy.contains('Entrar').click()
        }
        clicarrenove(){
            cy.contains('Renove').click()
        }
        Sucesso(){
            cy.get('.glambox-home > :nth-child(1)').should('contains','Olá, b4a!')
        }
        
    }
export default LoginPage;

