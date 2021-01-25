/// <reference types="cypress" />

import autenticacao from '../support/pages/autenticacao'
import Routes from '../support/routes'

context('Publicação', () => {

    beforeEach(() => {
        cy.backgroundLogin()
        autenticacao.acessarFormularioDeNovaPublicacao()
    })
      
  it('Criar uma nova publicação', () => {
      autenticacao.preencherForumalario()
      autenticacao.submeterPublicao()
      autenticacao.verificarSePublicacaoFoiCriadaComSucesso()
   
  })

})