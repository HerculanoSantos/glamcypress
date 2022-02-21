Feature: Assinar glam com novo usuario
Scenario: Assinar clube glambox
    Given usuário acessou o site
    When clica em login
    When clicar em cadastro
    When preeencher informacoes
    When selecionar receber novidades
    When clicar em cadastrar
    Then Login realizado com sucesso