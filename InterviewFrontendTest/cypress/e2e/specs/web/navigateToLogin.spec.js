/// <reference types="cypress" />

import { acceptedUsernamesCredentialsList, passwordForAllUsers } from "../../../fixtures/resources/login.page";
import { homeUrl, standardUser, lockedOutUser, problemUser, performanceGlitchUser, secretSauce } from "../../../fixtures/resources/webTestData";

describe('Navigate And Validate Login Page Tests', () => {
    
    it('Navigate And Validate Login - Test Case', () => {

        cy.url().should('be.equal', homeUrl);
        cy.get(acceptedUsernamesCredentialsList).should('include.text', standardUser);
        cy.get(acceptedUsernamesCredentialsList).should('include.text', lockedOutUser);
        cy.get(acceptedUsernamesCredentialsList).should('include.text', problemUser);
        cy.get(acceptedUsernamesCredentialsList).should('include.text', performanceGlitchUser);
        cy.get(passwordForAllUsers).should('include.text', secretSauce);

        cy.log("***** Navigated And Validated Login Page Successfully *****");
    });
})