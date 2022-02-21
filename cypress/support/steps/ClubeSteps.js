import CreateuserPage from '../pageobjects/CreateuserPage'
const createuserPage = new CreateuserPage

Given("usuário acessou o site", () => {
    createuserPage.acessarSite();
})

When("clica em login",() => {
    createuserPage.ClicarLogin();
})

When("clicar em cadastro",() => {
    createuserPage.ClicarCadastro();
})

When ("preeencher informacoes", () => {
    createuserPage.preencherInformacoes();
})

When("selecionar receber novidades",() => {
    createuserPage.selecionarNovidades();
})
When("clicar em cadastrar",() => {
    createuserPage.clicarCadastrar();
})
Then("Createuser realizado com sucesso", () => {
    createuserPage.Sucesso();
})