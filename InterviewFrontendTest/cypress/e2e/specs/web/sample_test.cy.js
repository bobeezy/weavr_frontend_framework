context('Buy item', () => {

    beforeEach(() => {

        cy.visit('')
        .get('#user-name')
        .type('standard_user')
        .get('#password')
        .type('secret_sauce')
        .get('#login-button')
        .click()
    })
    
    it('Buys an item from the site', () => {
        
    })
})