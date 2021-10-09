describe('Speed Coding Challenge',()=>{
    Cypress.Cookies.preserveOnce();
    
    it('Visit Speed Challenge', ()=>{
        cy.visit('https://speedcoding.toptal.com');
    })
    it('Goes to challenge', ()=>{
        cy.get('#nav > div > ul > li > a').click();
        cy.contains('Login with GitHub').should('be.visible').click();
    })
    it('Login with GitHub', ()=>{
        cy.get('#login_field').should('be.visible');
        cy.pause();
    })
})