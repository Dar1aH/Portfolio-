class Login
{
  setUserName(username)
  {
    cy.get('input[placeholder="Username"]').type(username); 
  }
  setPassword(password)
  {
    cy.get('input[placeholder="Password"]').type(password); 
  }
  clickSubmit()
  {
    cy.get('button[type="submit"]').click(); 
  }
  verifyLogin()
  {
    cy.get('.oxd-topbar-header-breadcrumb').should('have.text', 'Dashboard');
  }
}
// Once you've created the class, you have to export it 

export default Login;