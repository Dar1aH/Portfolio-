
/// <reference types="Cypress" />

import 'cypress-iframe'
require('@4tw/cypress-drag-drop')

describe('Mouse Operations', () => {

    it('MouseHover', () =>{
    cy.visit('https://demo.opencart.com/');
    cy.get(':nth-child(1)>.dropdown-menu>.dropdown-inner>.list-unstyled>:nth-child(2)')
      .should('not.be.visible')
    cy.get('li.nav-item.dropdown:eq(0)').trigger('mouseover').click();
    cy.get(':nth-child(1)>.dropdown-menu>.dropdown-inner>.list-unstyled>:nth-child(2)').should('be.visible');
        
    });


    it('Right click', () =>{
    cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')

    //Approach 1 (we trigger the event)
    /*
    cy.get('.context-menu-one.btn.btn-neutral').trigger('contextmenu');
    cy.get('.context-menu-list>.context-menu-item:nth-child(3)').should('be.visible')
    */
    //Approach 2 
    cy.get('.context-menu-one.btn.btn-neutral').rightclick();
    cy.get('.context-menu-list>.context-menu-item:nth-child(3)').should('be.visible')

    });


    it('Double click', () =>{
        cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3')
        cy.frameLoaded('#iframeResult'); //Load the frame

        //Approach 1 - trigger()
        /*
        cy.iframe('#iframeResult').find('button[ondblclick="myFunction()"]').trigger('dblclick');
        cy.iframe('#iframeResult').find('#field2').should('have.value','Hello World!');
        */

        //Approach 2 - dblclick()
        cy.iframe('#iframeResult').find('button[ondblclick="myFunction()"]').dblclick();
        cy.iframe('#iframeResult').find('#field2').should('have.value','Hello World!');
    });

    // for drag and drop using hte plugin you have to add this statement at the beginning
    // require('@4tw/cypress-drag-drop')

    it('Drag and drop using plugin', () =>{

        cy.visit('http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');
        cy.get('#box6').should('be.visible');
        cy.get('#box106').should('be.visible');

        cy.wait(3000);
        //if drag and drop isn't working you can add {force:true} to forcefully do it
        
        cy.get('#box6').drag('#box106', {force:true});
    });


    it.only('Scrolling Page', () =>{
        cy.visit('https://www.countries-ofthe-world.com/flags-of-the-world.html')

        //India flag
        // If you want the scroll to be a bit slower, add {duration:2000}
        cy.get('td [src="flags-normal/flag-of-India.png"][alt="Flag of India"]').scrollIntoView({duration:3000});

        //Check if the element is visible or not
        
        cy.get('td [src="flags-normal/flag-of-India.png"][alt="Flag of India"]').should('be.visible');
        
        //I want to scroll up
        
        cy.get('td [src="flags-normal/flag-of-Malaysia.png"][alt="Flag of Malaysia"]').scrollIntoView({duration:3000});
        cy.get('td [src="flags-normal/flag-of-Malaysia.png"][alt="Flag of Malaysia"]').should('be.visible');

        cy.get('#footer').scrollIntoView({duration:3000});

    });

});