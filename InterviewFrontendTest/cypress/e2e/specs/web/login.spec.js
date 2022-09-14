/// <reference types="cypress" />

import { userName, invalidUsername, userPassword, inventoryUrl, homeUrl, products, errMessageLockOut, errMessageUsernameRequired, 
    errMessagePasswordRequired, errMessageUnmatchingCredentials, usernameInvalid, passwordInvalid } from "../../../fixtures/resources/webTestData";

//Setup
before(function () {
    // runs once before all tests in the block
    cy.fixture('resources/loginValidationData').then(function (user) {
        this.user = user
    })
})

describe('Sign In Tests', () => {

    it('Successful Sign In "standard_user" - Test Case', () => {

        cy.login(userName, userPassword);
        cy.validateSuccessfulSignIn(inventoryUrl, products, userName);

        cy.log("***** Signed In Successfully *****");
    });

    it('Successful Sign In With Different Valid Usernames - Test Case', function () {

        //loop through a list of different valid usernames
        this.user.username.forEach(function (element) {

            cy.visit('/');
            cy.login(element, userPassword);
            cy.validateSuccessfulSignIn(inventoryUrl, products, element);
        });

        cy.log("***** Signed In With Different Valid Usernames Successfully *****");
    });

    it('Unsuccessful Sign In With "Lock out" - Test Case', () => {

        cy.login(invalidUsername, userPassword);
        cy.validateUnsuccessfulSignIn(homeUrl, invalidUsername, userPassword, errMessageLockOut);

        cy.log("***** Failed To Sign In Successfully With 'Lock out' *****");
    });

    it('Unsuccessful Sign In With "Empty Password" - Test Case', () => {

        cy.login(userName, '{backspace}');
        cy.validateUnsuccessfulSignIn(homeUrl, userName, '', errMessagePasswordRequired);

        cy.log("***** Failed To Sign In Successfully With 'Empty Password' *****");
    });

    it('Unsuccessful Sign In With "Empty Username" - Test Case', () => {

        cy.login('{backspace}', userPassword);
        cy.validateUnsuccessfulSignIn(homeUrl, '', userPassword, errMessageUsernameRequired);

        cy.log("***** Failed To Sign In Successfully With 'Empty Username' *****");
    });

    it('Unsuccessful Sign In With "Empty Username" And "Empty Password" - Test Case', () => {

        cy.login('{backspace}', '{backspace}');
        cy.validateUnsuccessfulSignIn(homeUrl, '{backspace}', '{backspace}', errMessageUsernameRequired);

        cy.log("***** Failed To Sign In Successfully With 'Empty Username' And 'Empty Password' *****");
    });

    it('Unsuccessful Sign In With "Invalid Username" And "Invalid Password" - Test Case', () => {

        cy.login(usernameInvalid, passwordInvalid);
        cy.validateUnsuccessfulSignIn(homeUrl, usernameInvalid, passwordInvalid, errMessageUnmatchingCredentials);

        cy.log("***** Failed To Sign In Successfully With 'Empty Username' And 'Empty Password' *****");
    });
})