class Login
{
  txtUserName='input[placeholder="Username"]';
  txtPassword='input[placeholder="Password"]';
  btnSubmit='button[type="submit"]';
  lblmsg='.oxd-topbar-header-breadcrumb';

  setUserName(username)
  {
    cy.get(this.txtUserName).type(username); 
  }
  setPassword(password)
  {
    cy.get(this.txtPassword).type(password); 
  }
  clickSubmit()
  {
    cy.get(this.btnSubmit).click(); 
  }
  verifyLogin()
  {
    cy.get(this.lblmsg).should('have.text', 'Dashboard');
  }
}
// Once you've created the class, you have to export it 

export default Login;