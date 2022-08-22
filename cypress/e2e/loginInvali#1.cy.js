
//checking for the login for real user//

describe("Testing the invalid login", function () {
    it("use web security false here", function () {
      cy.visit('https://www.njuskalo.hr/prijavaprijava/');

      cy.xpath("//a[normalize-space()='Prijava']").click({force:true});

      cy.xpath("//input[@id='login_username']").type('kokoko', {force: true});

      cy.xpath("//button[@id='login_login']").click({force:true});
      
    });
  });



  //after testing it the user is correctly logged in hes account

  