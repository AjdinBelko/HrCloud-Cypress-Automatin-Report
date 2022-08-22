
//testing if the logged in user can search for ad

describe("Visit the URL & Login", function () {
    it("Logins to the account", function () {
      cy.visit('https://www.njuskalo.hr/');

      cy.xpath("//a[normalize-space()='Prijava']").click({force:true});

      cy.xpath("//input[@id='login_username']").type('ajdi15', {force: true});

      cy.xpath("//input[@id='login_password']").type('tester12345', {force: true});

      cy.xpath("//button[@id='login_login']").click({force:true});
      
    });

    it("Searches for the product, suggested ones", function () {
  
        cy.xpath("//a[@href='/auto-moto']").click({force:true});

        cy.xpath("//a[@href='/gospodarska-vozila']").click({force:true});

        cy.xpath("//a[normalize-space()='Autobusi']").click({force:true});

  });

  

});
  

  