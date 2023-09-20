/// <reference types="Cypress" />

describe('Handle tab-approach1',(()=>{

    it.skip('Approach1',()=>{
        cy.visit('https://the-internet.herokuapp.com/windows') // parent tab

        cy.get('.example >a').invoke('removeAttr','target').click(); 
        // We get the element, remove the target attribute so the page opens in the same tab and perform the click action

        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
        
        cy.wait(5000); //wait for 5 secs 

        //operations

        cy.go('back'); // back to the parent tab
    })

    // It is important that domains match, sub domains can be anything 

    it('Approach2',()=>{
        cy.visit('https://the-internet.herokuapp.com/windows') // parent tab

        cy.get('.example >a').then((e)=>{    //we're getting the element and passing it to the function (e)...

        let url = e.prop('href');     //...and from that element we're extracting the 'href' attribute value 
        // url is representing the target page which is child page 
        
        cy.visit(url); // this will open the target url on the current page

        })
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
        
        cy.wait(5000); //wait for 5 secs 

        //operations

        cy.go('back'); // back to the parent tab    
       
    }) 


}))