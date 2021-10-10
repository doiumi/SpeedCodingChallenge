describe('Speed Coding Challenge',()=>{
    
    it('Go To Speed Challenge', ()=>{
        Cypress.Cookies.debug(true);
        cy.visit('https://speedcoding.toptal.com');
        cy.get('#nav > div > ul > li > a').click();
        cy.contains('Login with GitHub').should('be.visible').click();
        cy.get('#login_field').should('be.visible');
        cy.get('#login_field').type(Cypress.env('userGitHub'));
        cy.get('#password').type(Cypress.env('passGitHub'));
        cy.get('.js-sign-in-button').click();
    })
})