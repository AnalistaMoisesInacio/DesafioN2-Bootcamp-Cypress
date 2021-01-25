var Chance = require('chance');
// Instantiate Chance so it can be used
var chance = new Chance();

const el = require('./elements').ELEMENTS

import Routes from '../../routes'

class Autenticacao{

    acessarFormularioDeNovaPublicacao(){

    cy.get(el.linkNovaPublicacao).click()

    } 

    preencherForumalario(){

        cy.get(el.inputTitle).type("Testando Title")
        cy.get(el.inputDescription).type(chance.string())
        cy.get(el.textAreaBody).type(chance.paragraph())
        cy.get(el.inputTag).type('cypress')
    }

    submeterPublicao() {

       cy.get(el.buttonSubmit).click()    
    }
  
    verificarSePublicacaoFoiCriadaComSucesso(){

        cy.wait(`@${Routes.as.postAutenticacao}`).then((postAutenticacaoResponse) => {
            expect(postAutenticacaoResponse.status).to.equal(200)
        })
        cy.wait(`@${Routes.as.getAutenticacaoTitle}`).then((getAutenticacaoTitle) =>{
            expect(getAutenticacaoTitle.status).to.equal(200)
        })
        cy.wait(`@${Routes.as.getAutenticacaoTitleComments}`).then((getAutenticacaoTitleComments) =>{
            expect(getAutenticacaoTitleComments.status).to.equal(200)
        })
    }
}

export default new Autenticacao();