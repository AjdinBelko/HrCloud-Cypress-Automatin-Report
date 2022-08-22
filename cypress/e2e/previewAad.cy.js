
//testing if the logged in user can create a preview for add

describe("Preview the ad", function () {
  it("Logins to the account, navigates, add the description", function () {

    cy.visit('https://www.njuskalo.hr/');

    cy.xpath("//a[normalize-space()='Prijava']").click({force:true});

    cy.xpath("//input[@id='login_username']").type('ajdi15', {force: true});

    cy.xpath("//input[@id='login_password']").type('tester12345', {force: true});

    cy.xpath("//button[@id='login_login']").click({force:true});

    // creating a new add

    // choosing to post 

    cy.xpath("//a[@class='BaseEntitySubmitAction BaseEntitySubmitCoreCTA-action button-standard button-standard--alpha']").click({force:true});

    //choosing the requested selection 

    cy.xpath("//label[normalize-space()='Auto Moto']").click({force:true});

    cy.xpath("//label[normalize-space()='Gospodarska vozila']").click({force:true});

    cy.xpath("//label[@for='submitCategorySelectorLevelCategory12775']").click({force:true});

    cy.xpath("//button[@class='form-action form-action--submit button-standard button-standard--alpha SubmitCategorySelector-submit']").click({force:true});

    //choosing the package 

    cy.xpath("//div[@class='ProductSelectTable-cta']//input[@id='submit-button-01']").click({force:true});

    //adding the description

    cy.xpath("//select[@id='ad-condition_id']").select('novo', {force:true});

    cy.xpath("//input[@id='ad-modelName']").type('VW', {force: true});

    cy.xpath("//input[@id='ad-yearManufactured']").type('2000', {force: true});

    cy.xpath("//select[@id='ad-motorTypeId']").select('benzinski', {force:true});

    cy.xpath("//input[@id='ad-mileage']").type('3000', {force:true});

    cy.xpath("//input[@id='ad-modelYear']").type('2000',{force:true});

    cy.xpath("//input[@id='ad-motorSize']").type('2000',{force:true});

    cy.xpath("//input[@id='ad-motorPower']").type('2000',{force:true});

    cy.xpath("//select[@id='ad-ownerCountId']").select('drugi',{force:true});

    cy.xpath("//select[@id='ad-registrationExpiryTs']").select('08/2022',{force:true});

    cy.xpath("//select[@id='ad-transmissionType']").select('automatski', {force:true});

    cy.xpath("//input[@id='ad-vehicleSeatCount']").type('3', {force:true});
    
    cy.xpath("//input[@id='ad-firstRegistrationYear']").type('2019', {force:true});

    cy.xpath("//select[@id='ad-guaranteeTypeId']").select('1 godina', {force:true});

    cy.xpath("//select[@id='ad-ecoStandardTypeId']").select('Euro 1',{force:true});

    cy.xpath("//select[@id='ad-airconditionTypeId']").select('dvojna',{force:true});

    cy.xpath("//input[@id='ad-serviceBook']").click({force:true});

    cy.xpath("//select[@id='ad-colorId']").select('crna', {force:true});

    cy.xpath("//input[@id='ad-metallicColor']").click({force:true});


    // adding the additional  options 

    cy.xpath("//input[@id='ad-vehicleEquipment_ksenon svjetla']").click({force:true});

    cy.xpath("//input[@id='ad-vanSafetyFeatures_ABS']").click({force:true});

    cy.xpath("//input[@id='ad-vanComfortFeatures_tempomat']").click({force:true});

    cy.xpath("//input[@id='ad-paymentOptions_12']").click({force:true});

    cy.xpath("//input[@id='ad-paymentOptions_341']").click({force:true});

    cy.xpath("//input[@id='ad-paymentOptions_342']").click({force:true});

    cy.xpath("//select[@id='ad-vanRadioTypeId']").select('CD', {force:true});

    cy.xpath("//select[@id='ad-vanAirbagType']").select('vozački', {force:true});


    //addint the third addition to the description 

    cy.xpath("//input[@id='ad-title']").type('VW', {force:true});

    cy.xpath("//textarea[@id='ad-description']").type('VW na prodaju', {force:true});

    cy.xpath("//input[@id='ad-enteredPrice-amount']").type('30000', {force:true});

    cy.xpath("//button[normalize-space()='Dohvati moju lokaciju']").click({force:true});

    cy.xpath("//select[@id='adLocalitySelector-location_id_level_0']").select('Bjelovarsko-bilogorska', {force:true});

    cy.xpath("//select[@id='adLocalitySelector-location_id_level_1']").select('Berek', {force:true});

    cy.xpath("//select[@id='adLocalitySelector-location_id_level_2']").select('Berek', {force:true});


    // cy.xpath("//input[@id='item_file_10']").click({force:true}) if photos are offline and ready to upload

    cy.xpath("//input[@id='ad-youtube_url']").type('wwww/youtube/com', {force:true});

    // publishing and moving forward

    // cy.xpath("//button[@id='ad-submitButton']").click({force:true})


  });

});

