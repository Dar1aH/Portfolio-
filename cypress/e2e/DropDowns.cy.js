describe('handle dropdowns',()=>{

it.skip('Dropdown with select', ()=>{
        cy.visit('https://weworkremotely.com/remote-jobs/new');
        cy.get('#listing_category_id').select('17')
          .should('have.value','17')
        
})

it.skip('Dropdown without select', ()=>{
  cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/');
  cy.get('#select2-billing_country-container').click()
  cy.get('.select2-search__field').type('Italy').type('{enter}')
  cy.get('#select2-billing_country-container').should('have.text','Italy')

  
})

it.skip('Autosuggest dropdown', ()=>{
  cy.visit('https://www.wikipedia.org/');
  cy.get('#searchInput').type('Delhi')
  cy.get('.suggestion-title').contains('Delhi University').click()

  
})
it('Dynamic dropdown', ()=>{
  cy.visit('https://www.google.com/') //We have launched the page
  cy.get('#L2AGLb').click(); // Accepted cookies 

  cy.get('#APjFqb').type('cypress automation') // Typed the text into hte inputbox
  cy.wait(3000) // Waited for 3 seconds 

  cy.get('div.wM6W7d>span').should('have.length',12) // Captured all the options and counted them

  cy.get('div.wM6W7d>span').each(($el, index,$list)=>{ //We're reading each and every option into $el element
    if($el.text()=='cypress automation tutorial'){  //Comparing the text value of element with the text in '' if they are equal
      cy.wrap($el).click() // directly clicking on the option, the option stays in hte input box 
    }
  })
  cy.get('#APjFqb').should('have.value','cypress automation tutorial') // verifying that the input box has the right value or not 
  
})

})
 