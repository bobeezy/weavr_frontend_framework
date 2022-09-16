/// <reference types="cypress" />

import {
    userName, itemName, userPassword, inventoryUrl, products, firstName,
    lastName, postalCode } from "../../../fixtures/resources/webTestData";

describe('Buy Item', () => {

    it('Buy An Item From The Site - Test Case', () => {

        cy.login(userName, userPassword);
        cy.validateSuccessfulSignIn(inventoryUrl, products, userName);
        cy.addItemToCart(itemName);
        cy.checkoutYourInformation(firstName, lastName, postalCode);
        cy.checkoutOverview(itemName);
        cy.checkoutComplete();

        cy.log("***** Bought An Item Successfully *****");
    });
})