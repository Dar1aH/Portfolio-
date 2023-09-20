//Hooks
//Before executing all the tests, whatever pre-requisite we have.. 
//..we can write one method which we want to execute only once before 
//..executing all the tests and that you can specify as a hook
//There're 4 types of hooks available 1 - before, 2 - after, 3 - beforeEach 
//.. and 4 - afterEach

describe('MyTestSuite', ()=>{

    before(()=>{
        cy.log('*****  Launch app  *****');
    })

    after(()=>{
        cy.log('*****   close App   *****');
    })

    beforeEach(()=>{
        cy.log('*****   searching  *****');
    })

    afterEach(()=>{
        cy.log('*****   Logout  *****');
    })

it('search', ()=>{

    cy.log('*****    searching   *****');

})

it('advanced search', ()=>{
   
    cy.log('*****    advanced searching   *****');

    
})

it('listing Products', ()=>{

    cy.log('*****    listing products  *****');
    
})

})


//Tags
//it.skip
//it.only