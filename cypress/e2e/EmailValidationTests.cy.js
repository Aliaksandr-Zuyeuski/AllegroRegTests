
/// <reference types="cypress" />
import { faker } from '@faker-js/faker'

describe('Form Interactions', function () {
    beforeEach(function () {

        cy.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        cy.visit('/rejestracja/konto-firmowe/nowe-konto', {
            headers: {
                'Host': ' allegro.pl.allegrosandbox.pl',
                'Cookie': ' _cmuid=cac6d44a-764d-45a5-9f79-d2c85715c04a; _gcl_au=1.1.2008439289.1670506533; gdpr_permission_given=1; _gid=GA1.2.1682417794.1670506537; __gfp_64b=-TURNEDOFF; _tt_enable_cookie=1; _ttp=ngtmMWCWIxVGnsA0_hDJtUyAWTu; wdctx=v4.iDPb2VrKsNhGXdFUJqKiO2qZ9KEqiN37iJQ90SFJIsPfDffvhoA-7Qx51unzpspirTmSBEoSUjCc1TkuzwG5L9eAbJWbq2nwVpD48v9MDsAn9hHe6uY4QsUyq3xbhSeQDdRj0Geq8xjvLKNo1lIPdQN1UegNNkH8eSlhIBW4pnIFyfufGYed3SJ_Ol_UTavTWOgXjgcEoMfhn-icwfl7-c_6I22TOOFbhEDDAb180XHCTLlvvbpg8TZ4dqTRB3_SRqWUkh3O5Uc; _ga_G64531DSC4=GS1.1.1670520798.3.1.1670522567.47.0.0; datadome=5wwA3ad4FsF1B6KpizWYHBM5LctH9xfHclk-x7FdOAHnXPw~Q3P8oUfX4EsQravJBIYjmb7~~V2WxxDpQqcrAaKT3zuFoBuTdJoPFfeEguV120P5J6JAVgdGAligcTen; _ga=GA1.2.626119328.1670506537; _gat_UA-2827377-1=1',
            },
            failOnStatusCode: false,
        })
    })

    it('Should have error if mail not have domain', function () {



        cy.get('#email').type('MyTestMaiAllegroX@.')
        cy.get('[data-testid="login-field"]').click()
        cy.get('[data-testid="email-field-label-2"]')
            .should('have.text', 'Niepoprawny adres e-mail')


        Cypress.Commands.add('confirmCaptcha', function () {

        })

    })
})