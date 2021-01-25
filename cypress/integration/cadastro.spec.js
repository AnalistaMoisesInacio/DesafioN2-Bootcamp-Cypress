/// <reference types="cypress" />
// Load Chance
var Chance = require('chance');

// Instantiate Chance so it can be used
var chance = new Chance();

context('Cadastro', () => {
    it('Cadastrar um novo usuário', () => {
        cy.visit('register')
        cy.get('input[ng-model*=username]').type(chance.name())
        cy.get('input[ng-model*=email]').type(chance.email())
        cy.get('input[ng-model*=password]').type('12345678')
        cy.get('button.btn-primary').click()
    });
});