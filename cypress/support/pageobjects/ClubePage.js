import CreateuserElements from "../elements/CreateuserElements"
const createuserElements = new CreateuserElements
const url = Cypress.config("baseUrl")

    class CreateuserPage{
        acessarSite(){
            cy.visit(url)
        }
        ClicarLogin(){
            cy.contains('Login').click({force: true})
        }
        ClicarCadastro(){
        cy.wait(2000)
        cy.get(':nth-child(9) > .login__form-container__form__link').click()
        }
        preencherInformacoes()
            {
            cy.wait(2000)    
            cy.get('[_ngcontent-serverapp-c205=""][type="email"] > #email').type('b4aquality@gmail.com')
            cy.wait(2000)
            cy.get('[mask="000.000.000-00"] > #document').type('724.754.360-42')
            cy.wait(2000)
            cy.get(':nth-child(6) > #firstName').type('Herculano')
            cy.wait(2000)
            cy.get(':nth-child(8) > #lastName').type('Cypress')
            cy.wait(2000)
            cy.get('commons-input > #birthday').type('01/01/1990')
            cy.wait(2000)
            cy.get('commons-input > #phone').type('85555555555')
            cy.wait(2000)
            cy.get(':nth-child(11) > #password').type('abcd1234')
            cy.wait(2000)
            cy.get(':nth-child(13) > #passwordConf').type('abcd1234')
        }
        selecionarNovidades(){
            cy.wait(2000)
            cy.get(':checkbox').uncheck({force:true})
            cy.wait(4000)
            cy.get(':checkbox').check({force:true})
            
        }
        clicarCadastrar(){
            cy.contains('Cadastrar').click()
        }
        Sucesso(){
            cy.get('.glambox-home > :nth-child(1)').should('contains','Olá, b4a!')
        }
    }

export default CreateuserPage;

