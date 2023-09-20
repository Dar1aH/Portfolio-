/// <reference types="Cypress" />

import 'cypress-iframe'

describe("handling frames",()=>{

    it('approach1', ()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe');

        const iframe = cy.get('#mce_0_ifr')   // we should get the frame first by wrapping it into => 0.contentDocument.body
          .its('0.contentDocument.body')
          .should('be.visible')      // check if it's visible
          .then(cy.wrap);           // wrap it 
        
          iframe.clear().type("Welcome {cmd+a}");

          cy.get('[aria-label="Bold"]').click();

    })

    it('approach2 - by using custom command', ()=>{   // useful when creating multiple iframes
        cy.visit('https://the-internet.herokuapp.com/iframe'); // the custom command is added to commands.js file
        
        cy.getIframe('#mce_0_ifr').clear().type("Welcome {cmd+a}");

        cy.get('[aria-label="Bold"]').click();

    })

    it('approach3 - by using cypress-iframe plugin', ()=>{ // cypress iframe plugin was additionally installed 
        cy.visit('https://the-internet.herokuapp.com/iframe');

        cy.frameLoaded('#mce_0_ifr'); // Load the frame

        cy.iframe('#mce_0_ifr').clear().type("Welcome {cmd+a}");

        cy.get('[aria-label="Bold"]').click();
        
    })

})

//You can use your custom command in multiple script