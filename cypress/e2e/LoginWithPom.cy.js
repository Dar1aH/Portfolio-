// Page Object model helps to avoid problems with duplication and updation 

//import Login from "../PageObjects/LoginPage.js"

import Login from "../PageObjects/LoginPage2.js"

describe('pom',()=>{
//General approach    
   it.skip('LoginTest', ()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/")
    cy.get('input[placeholder="Username"]').type("Admin");
    cy.get('input[placeholder="Password"]').type("admin123");
    cy.get('button[type="submit"]').click();
    cy.get('.oxd-topbar-header-breadcrumb').should('have.text', 'Dashboard');

   })
// Using Page Object Class 
   it.skip('LoginTest', ()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/")

    const ln=new Login();
    ln.setUserName("Admin")
    ln.setPassword("admin123")
    ln.clickSubmit();
    ln.verifyLogin();

   })

// Using Page Object Model with fixtures
// Instead of hardcoded data we can use data from the fixtures
// ... orangehrm.json file 

   it.only('LoginTest', ()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/")

    cy.fixture('orangehrm').then((data)=>{
        const ln=new Login();
        ln.setUserName(data.username)
        ln.setPassword(data.password)
        ln.clickSubmit();
        ln.verifyLogin();
    })
   })
})