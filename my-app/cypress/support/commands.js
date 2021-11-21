// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('loginWithGivenValues', (username, password) => {
    cy.get("[name='username']").type(username)
    cy.get("[type='password']").type(password)
    cy.get("[type='submit']").contains("Login").click()
})

Cypress.Commands.add('signUpWithGivenValues', (username, displayname, password, passwordRepeat) => {
    cy.get("[name='username']").type(username)
    cy.get("[name='displayName']").type(displayname)
    cy.get("[name='password']").type(password)
    cy.get("[name='passwordRepeat']").type(passwordRepeat)
})

Cypress.Commands.add('deleteUserFromDB', (username) => {
    cy.request({
        method: "DELETE",
        url: `http://localhost:8080/v1/user/${username}`
    })
})

