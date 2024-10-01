*** Settings ***
Library    SeleniumLibrary

*** Variables ***
${URL}         https://www.amazon.com.br
${BROWSER}     Chrome
${PRODUTO}     smartphone

*** Test Cases ***
Pesquisa de Smartphone na Amazon
    [Documentation]    Busca por um produto na Amazon e verifica se está presente na página.
    Open Browser    ${URL}    ${BROWSER}
    Input Text    id=twotabsearchtextbox    ${PRODUTO}
    Click Button    id=nav-search-submit-button
    Page Should Contain    ${PRODUTO}
    Close Browser
