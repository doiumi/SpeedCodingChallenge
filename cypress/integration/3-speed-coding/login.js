describe('Login page', () => {
    before(() => {
        cy.log(`Visiting https://company.tld`)
        cy.visit('/')
    })
    it('Login with GitHub', () => {
        cy.get('#nav > div > ul > li > a').click();

        // cy.pause();
        const username = Cypress.env('userGitHub')
        const password = Cypress.env('passGitHub')
        const loginUrl = Cypress.env('SITE_NAME')
        const cookieName = Cypress.env('COOKIE_NAME')
        const socialLoginOptions = {
            username,
            password,
            loginUrl,
            headless: true,
            logs: false,
            isPopup: true,
            // preLoginSelector: "#Your\\ App\\:\\ \\'SpeedCodingChallenge\\' #modal-host > div > div > div:nth-child(3) > div > button:nth-child(2)",
            loginSelector: "#modal-host > div > div > div:nth-child(3) > div > button:nth-child(2)",
            postLoginSelector: '.js-sign-in-button',
        }

        return cy
            .task('GitHubSocialLogin', socialLoginOptions)
            .then(({ cookies }) => {
                cy.clearCookies()

                const cookie = cookies
                    .filter(cookie => cookie.name === cookieName)
                    .pop()
                if (cookie) {
                    cy.setCookie(cookie.name, cookie.value, {
                        domain: cookie.domain,
                        expiry: cookie.expires,
                        httpOnly: cookie.httpOnly,
                        path: cookie.path,
                        secure: cookie.secure,
                    })

                    Cypress.Cookies.defaults({
                        preserve: cookieName,
                    })

                    // remove the two lines below if you need to stay logged in
                    // for your remaining tests
                    // cy.visit('/api/auth/signout')
                    // cy.get('form').submit()
                }
            })
    })
})