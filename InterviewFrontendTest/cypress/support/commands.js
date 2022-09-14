/// <reference types="cypress" />

import { usernameTextbox, passwordTextbox, loginButton, loginErrorMessage } from "../fixtures/resources/login.page";
import { productsTitle, cartIcon } from "../fixtures/resources/home.page";

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// -- Custom command --
Cypress.Commands.add('login', (username, password) => { 
    //enter 'Username'
    cy.get(usernameTextbox).clear().type(username);

    //enter 'Password'
    cy.get(passwordTextbox).clear().type(password);
   
    //click 'Login' button
    cy.get(loginButton).click();
})

Cypress.Commands.add('validateSuccessfulSignIn', (url, title, usrn) => { 
    if(usrn.toLowerCase() === 'performance_glitch_user') { //This user has high loading times. Does the site still work as expected?
        //validate user has high loading times
        cy.log("performance_glitch_user scenario"); //TODO delete later
        var start = 0;
        cy.then(() => {
            start = performance.now();
        });

        cy.get(productsTitle).should('include.text', title).then(() => {
            cy.log(`duration: ${performance.now() - start} ms`);
        });
    }
    else if (usrn.toLowerCase() === 'problem_user') { //Images are not loading for this user.
        //validate images are not loading
        cy.log("problem_user scenario"); //TODO delete later
        cy.get('a').find('img').should('have.attr', 'src').should('include','/static/media/sl-404.168b1cce');
    }
    else {
        //The site should work as expected for this user
        cy.log("Regular successful scenario");
    }
    //validate page url
    cy.url().should('be.equal', url);

    //validate 'PRODUCTS' title
    cy.get(productsTitle).should('include.text', title);

    //validate Shopping Cart icon
    cy.get(cartIcon).should('be.visible');
})

Cypress.Commands.add('validateUnsuccessfulSignIn', (url, usrn, pwd, errMessage) => { 
    //validate user did not signed in
    cy.url().should('be.equal', url);

    if (usrn.toLowerCase() === 'locked_out_user') { //User is locked out and should not be able to log in.
        //validate error message
        cy.get(loginErrorMessage).should('include.text', errMessage);
    }
    else if (usrn === '' || usrn === null) { 
        //validate error message
        cy.get(loginErrorMessage).should('include.text', errMessage);
    }
    else if (pwd === '' || pwd === null) { 
        //validate error message
        cy.get(loginErrorMessage).should('include.text', errMessage);
    }
    else if (usrn === '' || (usrn === '' && pwd === '')) { 
        //validate error message
        cy.get(loginErrorMessage).should('include.text', errMessage);
    }
    else {
        //validate error message
        cy.get(loginErrorMessage).should('include.text', errMessage);
    }
})