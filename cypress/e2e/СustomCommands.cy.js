//We create and add custom commands in the commands.js folder 
//click on link using label
// over writing existing contains() command
// re-usable custom command

describe('Custom commands', ()=>{

it.skip('handling links', ()=>{
cy.visit('https://demo.nopcommerce.com/');
//direct approach - without using custom command
//===> cy.get('.product-title> a:contains("Apple MacBook Pro 13-inch")').click();

// using custom command
//because the click action is in the custom command
//we don't have to include .click()
cy.clickLink('Apple MacBook Pro 13-inch');   
cy.get('.product-name').should('have.text', 'Apple MacBook Pro 13-inch');
   

})

it.skip('Overwriting existing command', ()=>{


})


   it.only('Login command', ()=>{
      cy.visit('https://demo.nopcommerce.com/');
   // Login
   // Search product
   // I want to multiply the login for several test cases
   //I've already created a custom command for this in commands.js file

    cy.clickLink("Log in"); //custom command 
    cy.wait(3000);
    cy.loginapp("email","password"); //custom command

    cy.get('li>a.ico-account').should('have.text','My account');
})

})