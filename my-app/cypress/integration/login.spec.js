/// <reference types="cypress" />


describe("Login Tests", () => {

    beforeEach(() => {
        cy.visit("/")
        cy.contains("a", "Login").click()
    })

    it("Valid username and password", () => {
        cy.loginWithGivenValues("user1", "Password123")
        cy.get(".navbar-right-signup").should("have.text", "display1")
        cy.get(".navbar-right-last-login").should("have.text", "Logout")
    })

    it("Unvalid username", () => {
        cy.loginWithGivenValues("Unvalid", "Password123")
        cy.get(".alert-danger").should("have.text", "Username or password is incorrect")
    })

    it("Unvalid password", () => {
        cy.loginWithGivenValues("user1", "unvalid")
        cy.get(".alert-danger").should("have.text", "Username or password is incorrect")
    })

    it("Unvalid username and password", () => {
        cy.loginWithGivenValues("unvalid", "unvalid")
        cy.get(".alert-danger").should("have.text", "Username or password is incorrect")
    })

    it("Blank username", () => {
        cy.get("[type='password']").type("Password123")
        cy.contains("button", "Login").should("be.disabled")
    })

    it("Blank password", () => {
        cy.get("[name='username']").type("user")
        cy.contains("button", "Login").should("be.disabled")
    })

    it("Blank username and password", () => {
        cy.contains("button", "Login").should("be.disabled")
    })
})