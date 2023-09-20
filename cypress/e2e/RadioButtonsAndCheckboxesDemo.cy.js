/// <reference types="Cypress" />

describe("Check UI Elements", ()=>{
   /* it("Checking Radio Buttons", ()=>{

        cy.visit("https://testautomationpractice.blogspot.com/")

        //visibility of radio buttons
        cy.get('.form-check-input#male').should('be.visible')
        cy.get('.form-check-input#female').should('be.visible')

        //selecting radio buttons
        cy.get("input#female").check().should('be.checked')
        cy.get("input#male").should('not.be.checked')

    }) */

    it("Checking Check boxes", ()=>{

        cy.visit("https://testautomationpractice.blogspot.com/")

       //Visibility of the element
       // cy.get('.form-check-input#monday').should('be.visible')

        //Selecting single check box - Monday

        // cy.get('.form-check-input#monday').check().should('be.checked')

        //Unselecting checkbox

        // cy.get('.form-check-input#monday').uncheck().should('not.be.checked')

        //Selecting all the checkboxes

        // cy.get('input.form-check-input[type="checkbox"]').check().should('be.checked')
        // cy.get('input.form-check-input[type="checkbox"]').uncheck().should('not.be.checked')

        //Select first/last checkbox

        cy.get('input.form-check-input[type="checkbox"]').first().check().should('be.checked')
        cy.get('input.form-check-input[type="checkbox"]').last().check().should('be.checked')

    })



})