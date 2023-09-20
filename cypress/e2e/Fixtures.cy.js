describe('MyTestSuite', ()=>{

//Direct access
it.skip('FixturesDemoTest', ()=>{

    cy.visit('https://opensource-demo.orangehrmlive.com/');

    //we specify the name of the json file from the fixtures folder
    //whatever data we have in that file, we capture it and tie into a particular variable (data)
    //and pass it into the arrow function
    //and inside the main block we capture the actual data from this variable
    //... like data.username, data.password and data.expected (the validation message from the file)

    cy.fixture('orangehrm').then( (data)=>{  //the data from orangehrm.json file is in this variable
        cy.get('input.oxd-input.oxd-input--active[name="username"]').type(data.username);
        cy.get('input[placeholder="Password"]').type(data.password);
        cy.get('button[type="submit"]').click();
        cy.get('ul.oxd-main-menu>li:nth-child(2)').click();
        cy.get('.oxd-topbar-header-breadcrumb').should('have.text', data.expected); 

    })

})


//Suppose the same particular data is required for multiple tests
// Access through Hook - for multiple it blocks




let userdata;
before( ()=>{  //this will execute only once before starting hte 'it' block

//load the fixture file and specify the name of it
//and whatever data is present in that fixture file we're capturing into this 'data' variable 
// .. and this is an arrow function
// assign this variable to another variable 'userdata'
//you need to make it as a global variable, so before everything you should declare it let=userdata

    cy.fixture('orangehrm').then( (data)=>{ 
        userdata=data;
    })
})

it('FixturesDemoTest', ()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/');
    
    cy.get('input.oxd-input.oxd-input--active[name="username"]').type(userdata.username);
    cy.get('input[placeholder="Password"]').type(userdata.password);
    cy.get('button[type="submit"]').click();
    cy.get('ul.oxd-main-menu>li:nth-child(2)').click();
    cy.get('.oxd-topbar-header-breadcrumb').should('have.text', userdata.expected);

})

})