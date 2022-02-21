import LoginPage from '../pageobjects/LoginPage'
const loginPage = new LoginPage

Given("usuário acessou o site", () => {
    loginPage.acessarSite();
})
When("clica em login",() => {
    loginPage.ClicarLogin();

})

When ("preenche email e senha", () => {
    loginPage.preencheremailsenha();
})

When("clica em entrar",() => {
    loginPage.clicarentrar();
})
When("clica em renove",() => {
    loginPage.clicarrenove();
})
Then("Login realizado com sucesso", () => {
    loginPage.Sucesso();
})
