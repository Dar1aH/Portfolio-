/// <reference types="Cypress" />


describe('Alerts', ()=>{
//1) JavaScript Alert: It will have some text and an 'OK' button

it('Js simple alert', ()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('button[onclick="jsAlert()"]').click()

//1st Assertion where we're validating the text present in the window
        cy.on('window:alert', (t)=>{
               expect(t).to.contains('I am a JS Alert')
        })

//alert window automatically closed by cypress 

//2nd Assertion where we're validating whether the text is present in the UI or not
    cy.get('#result').should('have.text','You successfully clicked an alert')

    })

//2) JavaScript Confirm Alert:It will have some text with 'OK' and 'Cancel' buttons

it('Js confirmation alert - OK', ()=>{

    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    cy.get('button[onclick="jsConfirm()"]:eq(0)').click()

    cy.on('window:confirm', (t)=>{
        expect(t).to.contains('I am a JS Confirm')
 })
//Cypress automatically closed alert window by using ok button-default

cy.get('#result').should('have.text','You clicked: Ok')

})


it('Js confirm alert - Cancel', ()=>{

    cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

    cy.get('[onclick="jsConfirm()"]').click();

    cy.on('window:confirm', (t)=>{
        expect(t).to.contains('I am a JS Confirm');
 })
cy.on('window:confirm',()=> false); //cypress closes alert window using cancel button

cy.get('#result').should('have.text','You clicked: Cancel')

})

//3) avascript Prompt Alert: It will have some text with a textbox for user input along with 'OK' and 'Cancel'

it('Js prompt alert', ()=>{

cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

cy.window().then((win)=>{
        cy.stub(win,'prompt').returns('Welcome'); // gets the control of it and passes the value in the input box 
    })

cy.get('[onclick="jsPrompt()"]').click();

//cypress will automatically close prompted alert - it will use OK button - by default

//cy.on('window:prompt',()=> false); 

cy.get('#result').should('have.text','You entered: Welcome');

 })

//4) Authenticated Alert - when you have to provide username and password


it.only('Authenticated Alert', ()=>{
    
    //approach 1
   /* cy.visit('https://the-internet.herokuapp.com/basic_auth',{auth:
                                                 {username: "admin",
                                                 password: "admin"}
                                                });

    cy.get('div[class="example"] p').should('have.contain','Congratulations')
     })
   */

     //approach 2  => Add admin:admin@ into the url

     cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth');
     cy.get('div[class="example"] p').should('have.contain','Congratulations');
})
})