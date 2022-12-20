
/// <reference types="cypress" />
import { faker } from '@faker-js/faker'


describe('Form Interactions', function () {
  faker.locale = 'pl'
  const randomEmail = faker.internet.email()
  const randomLogin = faker.name.domainWord()
  const randomPassword = faker.internet.password(18,false,/[a-zA-Z0-9]/)
  const randomPhone = faker.phone.number('+485########')
  const randomKRS = faker.finance.pin(10)
  const randomCompanyName = faker.company.name()
  const randomAddress = faker.address.streetAddress(true)
  const randomCity = faker.address.city()
  const randomState = faker.address.state()
  const randomZipCode = faker.address.zipCodeByState(randomState)






  beforeEach(function () {

    cy.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
    // cy.wait(3000);
    cy.visit('/rejestracja/konto-firmowe/nowe-konto', {
      headers: {
        'Host': ' allegro.pl.allegrosandbox.pl',
        'Cookie': ' _cmuid=cac6d44a-764d-45a5-9f79-d2c85715c04a; _gcl_au=1.1.2008439289.1670506533; gdpr_permission_given=1; _gid=GA1.2.1682417794.1670506537; __gfp_64b=-TURNEDOFF; _tt_enable_cookie=1; _ttp=ngtmMWCWIxVGnsA0_hDJtUyAWTu; wdctx=v4.iDPb2VrKsNhGXdFUJqKiO2qZ9KEqiN37iJQ90SFJIsPfDffvhoA-7Qx51unzpspirTmSBEoSUjCc1TkuzwG5L9eAbJWbq2nwVpD48v9MDsAn9hHe6uY4QsUyq3xbhSeQDdRj0Geq8xjvLKNo1lIPdQN1UegNNkH8eSlhIBW4pnIFyfufGYed3SJ_Ol_UTavTWOgXjgcEoMfhn-icwfl7-c_6I22TOOFbhEDDAb180XHCTLlvvbpg8TZ4dqTRB3_SRqWUkh3O5Uc; _ga_G64531DSC4=GS1.1.1670520798.3.1.1670522567.47.0.0; datadome=5wwA3ad4FsF1B6KpizWYHBM5LctH9xfHclk-x7FdOAHnXPw~Q3P8oUfX4EsQravJBIYjmb7~~V2WxxDpQqcrAaKT3zuFoBuTdJoPFfeEguV120P5J6JAVgdGAligcTen; _ga=GA1.2.626119328.1670506537; _gat_UA-2827377-1=1',

      },
      failOnStatusCode: false,
    })
  })

  it('Happy path test', function () {

    cy.get('#email').type(randomEmail)
    cy.get("[data-testid='login-field']").type(randomLogin.substring(0,15))
    cy.get("[data-testid='password-field']").type(randomPassword)
    cy.get("[data-testid='phone-field']").type(randomPhone)
    cy.get('.iohzf').click().type('Polska{ENTER}')
    cy.get("[data-testid='taxId-field']").type("5219530719")
    cy.get("[data-testid='company-data-button']").click()


    cy.get('#legalForm').select('spółka z o.o.')
    cy.get('[data-testid="company-register-field"]').type(randomKRS)
    cy.get('[data-testid="name-field"]').type(randomCompanyName)
    cy.get('[data-testid="address-line-field"]').type(randomAddress)
    cy.get('#zipCode').type(randomZipCode)
    cy.get('[data-testid="city-field"]').type(randomCity)
    cy.get('#state').select(randomState)
    cy.get('[data-testid="agreementTerms-field"] > div > .mpof_vs').click("center")

    cy.get('iframe',{
      chromeWebSecurity: false,
    })
        .first()
        .its('0.contentDocument.body')
        .should('not.be.undefined')
        .and('not.be.empty')
        .then(cy.wrap)
        .find('#recaptcha-anchor')
        .should('be.visible')
        .click();

    cy.get(':nth-child(1) > .mp0t_ji').should('contain','Wysłaliśmy Ci e-mail z prośbą o aktywację')

    Cypress.Commands.add('confirmCaptcha', function () {

    })


  })
})
