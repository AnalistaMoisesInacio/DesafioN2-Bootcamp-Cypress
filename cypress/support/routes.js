class Routes{

  as = {
     postAutenticacao : 'POSTAutenticacao',
     getAutenticacaoTitle: 'GETAutenticacaoTitle',
     getAutenticacaoTitleComments: 'GETAutenticacaoTitleComments'
  }

  init(){
    cy.server()
    cy.route('POST','**/api/articles' ).as(this.as.postAutenticacao);
    cy.route('GET','**/api/articles/testando-title-**' ).as(this.as.getAutenticacaoTitle);
    cy.route('GET', '**/api/articles/testando-title-**/comments').as(this.as.getAutenticacaoTitleComments);
  }

}
export default new Routes()