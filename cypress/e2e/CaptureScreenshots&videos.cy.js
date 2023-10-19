
describe('mysuite', ()=>{

    it('Capture screenshots & Videos', ()=>{
    cy.visit('https://demo.opencart.com/');

   /*cy.screenshot('homepage'); // here we're capturing the entire page
    cy.wait(5000);
    cy.get('#logo').screenshot('logo'); */ // here we're capturing a specific elementclear

    // Automatically capture screenshot & video on failure only when you execure through CLI - Command-Line Interface
    cy.get('li.nav-item>a:contains("Cameras")').click();
    cy.get('#content.col > h2').should('have.text', 'Tablets' )
    
    })


})