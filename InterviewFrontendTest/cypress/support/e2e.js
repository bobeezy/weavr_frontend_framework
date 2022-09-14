// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Import 'cypress-mochawesome-reporter' for reporting
import 'cypress-mochawesome-reporter/register';

// Setup for Global behavior: Should execute before every single spec file
import { homeUrl } from '../fixtures/resources/webTestData';

beforeEach(() => {

    cy.visit('/');
    
    cy.log("Navigated to : " + homeUrl);
});
