/// <reference types="cypress" />

describe("Login Tests", () => {

    beforeEach(() => {
        cy.visit("/")
        cy.contains("a", "Sign Up").click()
    })

    it("Should Sign up successfully When all fields are entered correctly and checked checkbox", () => {
        cy.signUpWithGivenValues("user2", "display", "Password123", "Password123")
        cy.get("[type='checkbox']").click()
        cy.get("[type='submit']").click()
        cy.get(".navbar-right-signup").should("have.text", "display")
        cy.get(".navbar-right-last-login").should("have.text", "Logout")

        //it's deleting existing user from db which is create above
        cy.deleteUserFromDB("user2")
    })

    it("Should not Sign up successfully When username already is in use and checked checkbox", () => {
        cy.signUpWithGivenValues("user1", "display", "Password123", "Password123")
        cy.get("[type='checkbox']").click()
        cy.get("[type='submit']").click()
        cy.get(".invalid-feedback").should("have.text", "This username is in us")
    })

    it("Should not Sign up successfully When password dont match with defined regex and checked checkbox", () => {
        cy.signUpWithGivenValues("user3", "display", "notincludeuppercase", "notincludeuppercase")
        cy.get("[type='checkbox']").click()
        cy.get("[type='submit']").click()
        cy.get(".invalid-feedback").should("have.text", "Password must have at least 1 uppercase, 1 lowercase letter and 1 number")
    })

    it("Should not Sign up successfully When password dont match with passwordRepeat and checked checkbox", () => {
        cy.signUpWithGivenValues("user3", "display", "Password123", "password")
        cy.get(".invalid-feedback").should("have.text", "password dismatch")
        cy.get("[type='submit']").should("be.disabled")
    })



})