// go() & reload()

describe('mysuite', ()=>{

it('Navigation test', ()=>{
cy.visit("https://demo.opencart.com");
//Home page
cy.title().should('eq','Your Store'); // that is not text, it's written inside of the title tag
cy.get('li.nav-item> a:contains("Cameras")').click();
cy.get('#content >h2').should('have.text', 'Cameras'); // we're on Cameras page

cy.go('back'); // go back to home page
cy.title().should('eq','Your Store');

cy.go('forward'); // go back to Cameras page
cy.get('#content >h2').should('have.text', 'Cameras');

cy.go(-1); // home page 
cy.title().should('eq','Your Store'); // verifying the title of the home page 

cy.go(1); // cameras page 
cy.get('#content >h2').should('have.text', 'Cameras');

cy.reload();
})


})