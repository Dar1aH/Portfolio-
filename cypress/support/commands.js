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

Cypress.Commands.add('getIframe', (iframe)=>{ //get iframe is a command 
    return cy.get('#mce_0_ifr')   
    .its('0.contentDocument.body')
    .should('be.visible')     
    .then(cy.wrap);        
    
    })

    Cypress.Commands.add('clickLink',(label)=>{
        cy.get('a').contains(label).click();
    })    


    // custom command for login can be called from any time and anywhere for multiple tests
    Cypress.Commands.add("loginapp", (email,password)=>{
    cy.get('#Email').type('daxundaintravel@gmail.com');
    cy.get('#Password').type('test123');
    cy.get('.button-1.login-button').click();
    })