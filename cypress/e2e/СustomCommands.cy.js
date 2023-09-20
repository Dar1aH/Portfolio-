//We create and add custom commands in the commands.js folder 
//click on link using label
// over writing existing contains() command
// re-usable custom command

describe('Custom commands', ()=>{

it('handling links', ()=>{
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


   it.skip('Login command', ()=>{


})

})