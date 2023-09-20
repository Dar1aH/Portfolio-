describe('MyTestSuite', ()=>{

it('DataDrivenTest', ()=>{

//Because we have multiple inputs of data, we have to iterate for each set of data

cy.fixture('orangehrm2.json').then((data)=>{
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

  data.forEach( (userdata)=>{
    cy.get('input.oxd-input.oxd-input--active[name="username"]').type(userdata.username);
    cy.get('input[placeholder="Password"]').type(userdata.password);
    cy.get('button[type="submit"]').click();
  
  if(userdata.username=='Admin' && userdata.password=='admin123') //if the data is valid, then only we can verify the message
  {
    cy.get('.oxd-topbar-header-breadcrumb')
      .should('have.text', userdata.expected); //Dashboard validation

    cy.get('.oxd-userdropdown-tab>.oxd-icon').click(); //logout
    cy.get('.oxd-userdropdown-link[href="/web/index.php/auth/logout"]').click(); //logout   
  }  
  else{
    cy.get('.oxd-alert-content--error>p')
      .should('have.text', userdata.expected);
  }

  })

})

})

})