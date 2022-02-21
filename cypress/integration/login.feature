Feature: login Glambox
Scenario: Realizar Login com sucesso
    Given usuário acessou o site 
    When clica em login
    When preenche email e senha
    When clica em entrar
    When clica em renove
    Then Login realizado com sucesso