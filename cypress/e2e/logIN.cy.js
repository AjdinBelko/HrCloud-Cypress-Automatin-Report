
//checking for the login for real user//

describe("test the config json", function () {
    it("use web security false here", function () {
      cy.visit('https://www.njuskalo.hr/');

      cy.xpath("//a[normalize-space()='Prijava']").click({force:true});

      cy.xpath("//input[@id='login_username']").type('ajdi15', {force: true});

      cy.xpath("//input[@id='login_password']").type('tester123458955435353', {force: true});

      cy.xpath("//button[@id='login_login']").click({force:true});
      
    });
  });



  //after testing it the user is correctly logged in hes account

  