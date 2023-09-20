describe('Handle Tables',(()=>{
   
    beforeEach('Login',()=>{ //this is called a hook
      
        cy.visit('https://demo.opencart.com/admin/index.php')
        cy.get('#input-username').type('demo');
        cy.get('#input-password').type('demo');
        cy.get('button[type="submit"]').click();

        cy.get('.btn-close').click();

        //Customers --> Customers

        cy.get('#menu-customer>a').click(); //customers main menu
        cy.get('#menu-customer>ul>li:nth-child(1)').click(); //customers sub/child item
    })

    it.skip('Check number rows & columns',()=>{
       
        cy.get('table[class="table table-bordered table-hover"]>tbody>tr')
          .should('have.length','10'); //assertion that finds the total number of rows

        cy.get('table[class="table table-bordered table-hover"]>thead>tr>td')
          .should('have.length','7'); // assertion that finds the total number of columns  
    })

    it.skip('Check cell data from specific row & column',()=>{

        cy.get('table[class="table table-bordered table-hover"]>tbody>tr:nth-child(5)>td:nth-child(3)')
          .contains('hfgjhgjgjggj@gmail.com'); // the captured element should contain this value

    })

    it('Check all the rows & columns in the first page',()=>{
        //$row - a current row, index - an index of a particular row, $rows - all the rows

        cy.get('table[class="table table-bordered table-hover"]>tbody>tr')
          .each(($row, index, $rows)=>{  // we capture all the rows

        //next block will capture every row in particular
        cy.wrap($row).within(()=>{ 

        //next will capture every column in every row
            cy.get('td').each(($col, index, $cols)=>{
              cy.log($col.text());
            })
        })
          })

    })

    // Pagination - the row of buttons at the bottom of the page to click on to change the pages of the table 
    it.only('Pagination',()=>{

      //find total number of pages
    /*let totalPages;
     cy.get('.col-sm-6.text-end').then( (e)=>{
             let mytext=e.text();  // Showing 1 to 10 of 15313 (1532 Pages)
             totalPages=mytext.substring(mytext.indexOf('(')+1, mytext.indexOf('Pages')-1);
             cy.log('Total number of pages in a table=======>'+totalPages);
     })*/

    let totalPages=5; //suppose I want to read data from the 5 different pages in the table (Total  number of pages is 1532)

    for(let p=1;p<=totalPages;p++)
    {
      if(totalPages>1){
        cy.log('Active page is==='+p)
        cy.get('ul[class="pagination"]>li:nth-child('+p+')').click(); //insted of a hardcoded number you have to include '+p+'
        cy.wait(3000);
    
    //You've gotten the table, now get the rows and the data in them 
       cy.get('table[class="table table-bordered table-hover"]>tbody>tr') //capture all the rows, tr = table rows 
       .each(($row, index, $rows)=>{ //read each and every row
       cy.wrap($row).within( ()=>{   //wrap that particular row and go inside of it
               cy.get('td:nth-child(3)').then((e)=>{ // get the 3rd column from that row (you can get any column you need)
                cy.log(e.text()); //extract the text from that particular column from each of the rows
               })
       })
       })
      }
    }
    

    }) 

}))

// Pagination notes 
//1) You need to capture the total number of pages 
//2) Get the index of the opening bracket and do +1 to point to the first digit of the total number of pages 
//3) Get the index of the 'Pages' and do -1 to point to the last digit of the total number of pages 
//4) Once you've got the total number of pages you need to get the data from the table 
//5) To achive step 4 you need to write down a loop statement to capture each and every page until you've reached the total number of pages 