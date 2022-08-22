
//testing if the logged in user can search for ad

describe("Visit the URL & Login", function () {
    it("Logins to the account", function () {
      cy.visit('https://www.njuskalo.hr/');

      cy.xpath("//a[normalize-space()='Prijava']").click({force:true});

      cy.xpath("//input[@id='login_username']").type('ajdi15', {force: true});

      cy.xpath("//input[@id='login_password']").type('tester12345', {force: true});

      cy.xpath("//button[@id='login_login']").click({force:true});
      
    });

    // searches for the add by the desired settings 

    it("Searches for the product, desired option", function () {
  
        cy.xpath("//a[@href='/auto-moto']").click({force:true});

        cy.xpath("//a[@href='/gospodarska-vozila']").click({force:true});

        cy.xpath("//a[normalize-space()='Autobusi']").click({force:true});

        cy.xpath("//input[@id='modelName']").type('Man', {force:true});
      
        cy.xpath("//input[@id='GeoLocationSelector-autoComplete']").type('Zagreb', {force:true}).click({force:true});

        cy.xpath("//select[@id='transmissionType']").select('automatski', {force:true});

        cy.xpath("//select[@id='motorTypeId']").select('plin', {force:true});

        cy.xpath("//button[@id='submitButton']").click({force:true});  

  });

  

});
  

  