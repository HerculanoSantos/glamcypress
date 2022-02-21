Feature: Novo usuário Glambox
Scenario: criar novo usuario com sucesso
    Given usuário acessou o site 
    When clica em login
    When clicar em cadastro
    When preeencher informacoes
    When selecionar receber novidades
    When clicar em cadastrar
    Then Login realizado com sucesso