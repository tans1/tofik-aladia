describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/");
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('home page test', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:3000/');
    cy.get('[data-cy="navbar-component"]').should('be.visible');
    cy.get('[data-cy="searchbar-input"]').should('be.visible');
    cy.get('[data-cy="home-section-title"]').should('be.visible');
    cy.get('[data-cy="home-section-description"]').should('be.visible');
    cy.get('[data-cy="go-to-marketplace-button"]').should('be.visible');
    cy.get('[data-cy="join-button"] > [data-cy="custom-icon"] > .fa-solid').should('be.visible');
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('invalid new user login test', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:3000/');
    cy.get('[data-cy="join-button"] > [data-cy="custom-icon"] > .fa-solid').should('be.visible');
    cy.get('[data-cy="join-button"] > [data-cy="custom-icon"] > .fa-solid').click();
    cy.get('[data-cy="text-component"]').should('be.visible');
    cy.get('[data-cy="login-intro-title"]').should('be.visible');
    cy.get('.relative > .gradient').should('be.visible');
    cy.get('[data-cy="input-field"]').should('be.enabled');
    cy.get(':nth-child(1) > [data-cy="oauth-button"] > .w-40 > [data-cy="oauth-text"]').should('be.visible');
    cy.get('[data-cy="input-field"]').clear('a');
    cy.get('[data-cy="input-field"]').type('a{enter}');
    cy.get('[data-cy="submit-button"]').click();
    cy.get('[data-cy="email-error"]').should('be.visible');
    cy.get('[data-cy="input-field"]').click();
    cy.get('[data-cy="email-error"]').should('be.visible');
    cy.get('[data-cy="input-field"]').clear('t');
    cy.get('[data-cy="input-field"]').type('tofik@{enter}');
    cy.get('[data-cy="submit-button"]').click();
    cy.get('[data-cy="email-error"]').should('be.visible');
    cy.get('[data-cy="input-field"]').clear('tofik@.');
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('invalid new user signup test', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:3000/');
    cy.get('[data-cy="join-button"] > [data-cy="custom-icon"] > .fa-solid').click();
    cy.get('[data-cy="text-component"]').should('be.visible');
    cy.get('[data-cy="input-field"]').should('be.enabled');
    cy.get('[data-cy="input-field"]').clear('t');
    cy.get('[data-cy="input-field"]').type('tofik@gmail.com');
    cy.get('.relative > .gradient').should('be.visible');
    cy.get('.relative > .gradient').click();
    cy.get('[data-cy="enter-details-text"]').should('be.visible');
    cy.get('[data-cy="submit-button"] > .relative > .gradient').should('be.visible');
    cy.get('[data-cy="submit-button"] > .relative > .gradient').click();
    cy.get('[data-cy="first-name-error"] > span').should('be.visible');
    cy.get('[data-cy="surname-error"] > span').should('be.visible');
    cy.get('[data-cy="password-error"] > span').should('have.text', 'Required');
    cy.get('[data-cy="first-name-error"] > span').should('have.text', 'Required');
    cy.get('[data-cy="image-attach-component"]').should('have.class', 'border-red-300');
    cy.get('[data-cy="first-name-field"] > [data-cy="input-field"]').clear('lk');
    cy.get('[data-cy="first-name-field"] > [data-cy="input-field"]').type('lk');
    cy.get('[data-cy="surname-field"] > [data-cy="input-field"]').clear('e');
    cy.get('[data-cy="surname-field"] > [data-cy="input-field"]').type('er');
    cy.get('[data-cy="password-field"] > [data-cy="toggle-password-visibility-icon"] > .fa-solid').click();
    cy.get('[data-cy="password-field"] > [data-cy="input-field"]').clear('q');
    cy.get('[data-cy="password-field"] > [data-cy="input-field"]').type('qe');
    cy.get('[data-cy="password-error"] > span').should('have.text', 'Password must be at least 8 char long');
    cy.get('[data-cy="password-field"] > [data-cy="input-field"]').clear('qe');
    cy.get('[data-cy="password-field"] > [data-cy="input-field"]').type('qertwPLe');
    cy.get('[data-cy="password-error"] > span').should('have.text', 'Number required');
    cy.get('[data-cy="password-field"] > [data-cy="input-field"]').clear('qertwPLe2');
    cy.get('[data-cy="password-field"] > [data-cy="input-field"]').type('qertwPLe2');
    cy.get('[data-cy="password-error"] > span').should('have.text', 'Symbol required (@$!%*?&)');
    cy.get('[data-cy="password-field"] > [data-cy="input-field"]').clear('qertwPLe2?');
    cy.get('[data-cy="password-field"] > [data-cy="input-field"]').type('qertwPLe2?');
    cy.get('[data-cy="password-error"] > span').should('have.text', 'Strong password');
    cy.get('[data-cy="confirm-password-field"] > [data-cy="toggle-password-visibility-icon"] > .fa-solid').click();
    cy.get('[data-cy="confirm-password-field"] > [data-cy="input-field"]').clear('q');
    cy.get('[data-cy="confirm-password-field"] > [data-cy="input-field"]').type('qe');
    cy.get('[data-cy="confirm-password-error"]').should('have.text', 'Passwords don\'t match');
    cy.get('[data-cy="confirm-password-field"] > [data-cy="input-field"]').clear('qer');
    cy.get('[data-cy="confirm-password-field"] > [data-cy="input-field"]').type('qertwPLe2?');
    cy.get('[data-cy="submit-button"] > .relative > .gradient').click();
    cy.get('[data-cy="image-attach-component"]').should('have.class', 'border-red-300');
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('valid new user signup test', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:3000/');
    cy.get('[data-cy="join-button"] > [data-cy="custom-icon"] > .fa-solid').should('be.visible');
    cy.get('[data-cy="join-button"] > [data-cy="custom-icon"] > .fa-solid').click();
    cy.get('[data-cy="input-field"]').click();
    cy.get('[data-cy="text-component"]').should('be.visible');
    cy.get('[data-cy="text-component"]').should('have.text', 'Enter your email');
    cy.get('.relative > .gradient').should('be.visible');
    cy.get(':nth-child(1) > [data-cy="oauth-button"] > .w-40 > [data-cy="oauth-text"]').should('have.text', 'Continue with Google');
    cy.get('[data-cy="input-field"]').clear('t');
    cy.get('[data-cy="input-field"]').type('tofik@gmail.com');
    cy.get('.relative > .gradient').click();
    cy.get('[data-cy="first-name-field"] > [data-cy="input-field"]').click();
    cy.get('[data-cy="enter-details-text"]').should('have.text', 'Enter your details');
    cy.get('[data-cy="enter-details-text"]').should('be.visible');
    cy.get('[data-cy="first-name-field"] > [data-cy="input-field"]').clear('s');
    cy.get('[data-cy="first-name-field"] > [data-cy="input-field"]').type('sd');
    cy.get('[data-cy="surname-field"] > [data-cy="input-field"]').clear('q');
    cy.get('[data-cy="surname-field"] > [data-cy="input-field"]').type('qw');
    cy.get('[data-cy="password-field"] > [data-cy="input-field"]').click();
    cy.get('[data-cy="password-field"] > [data-cy="input-field"]').click();
    cy.get('[data-cy="password-field"] > [data-cy="toggle-password-visibility-icon"] > .fa-solid').click();
    cy.get('[data-cy="password-field"] > [data-cy="input-field"]').clear('1');
    cy.get('[data-cy="password-field"] > [data-cy="input-field"]').type('12345678P?');
    cy.get('[data-cy="confirm-password-field"] > [data-cy="toggle-password-visibility-icon"] > .fa-solid').click();
    cy.get('[data-cy="confirm-password-field"] > [data-cy="input-field"]').clear('1');
    cy.get('[data-cy="confirm-password-field"] > [data-cy="input-field"]').type('12345678P?');
    cy.get('[data-cy="image-attach-component"]').click();
    cy.get('[data-cy="submit-button"] > .relative > .gradient').should('be.visible');
    cy.get('[data-cy="terms-text"]').should('be.visible');
    cy.get('[data-cy="terms-checkbox"]').check();
    cy.get('[data-cy="submit-button"] > .relative > .gradient').click();
    cy.get('[data-cy="text-component"]').should('be.visible');
    cy.get('[data-cy="otp-message"]').should('be.visible');
    cy.get('[data-cy="otp-field-1"]').clear('1');
    cy.get('[data-cy="otp-field-1"]').type('1');
    cy.get('[data-cy="otp-field-2"]').clear('2');
    cy.get('[data-cy="otp-field-2"]').type('2');
    cy.get('[data-cy="otp-field-3"]').clear('3');
    cy.get('[data-cy="otp-field-3"]').type('3');
    cy.get('[data-cy="otp-field-4"]').clear('4');
    cy.get('[data-cy="otp-field-4"]').type('4');
    cy.get('[data-cy="otp-field-5"]').clear('5');
    cy.get('[data-cy="otp-field-5"]').type('5');
    cy.get('[data-cy="otp-field-6"]').clear('6');
    cy.get('[data-cy="otp-field-6"]').type('6');
    cy.get('.relative > .gradient').should('be.visible');
    cy.get('[data-cy="no-email-received-text"]').should('be.visible');
    cy.get('.relative > .gradient').click();
    cy.get('.mb-8').should('be.visible');
    cy.get('.relative > .gradient').should('be.visible');
    cy.get('.relative > .gradient').click();
    cy.get('[data-cy="home-section-title"]').should('be.visible');
    cy.get('[data-cy="home-section-title"]').should('have.text', 'E-learning Revolution 2');
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('valid existing user login test', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:3000/');
    cy.get('[data-cy="join-button"] > [data-cy="custom-icon"] > .fa-solid').should('be.visible');
    cy.get('[data-cy="join-button"] > [data-cy="custom-icon"] > .fa-solid').click();
    cy.get('[data-cy="text-component"]').should('be.visible');
    cy.get('.relative > .gradient').should('be.visible');
    cy.get('[data-cy="input-field"]').clear('to');
    cy.get('[data-cy="input-field"]').type('tofik@gmail.com');
    cy.get('.relative > .gradient').click();
    cy.get('[data-cy="enter-details-text"]').should('be.visible');
    cy.get('[data-cy="first-name-field"] > [data-cy="input-field"]').clear('ad');
    cy.get('[data-cy="first-name-field"] > [data-cy="input-field"]').type('ad');
    cy.get('[data-cy="surname-field"] > [data-cy="input-field"]').clear('qw');
    cy.get('[data-cy="surname-field"] > [data-cy="input-field"]').type('qw');
    cy.get('[data-cy="password-field"] > [data-cy="input-field"]').clear('1');
    cy.get('[data-cy="password-field"] > [data-cy="input-field"]').type('123456789P?');
    cy.get('[data-cy="confirm-password-field"] > [data-cy="input-field"]').clear('1');
    cy.get('[data-cy="confirm-password-field"] > [data-cy="input-field"]').type('12345678P?');
    cy.get('[data-cy="confirm-password-field"] > [data-cy="toggle-password-visibility-icon"] > .fa-solid').click();
    cy.get('[data-cy="password-field"] > [data-cy="toggle-password-visibility-icon"] > .fa-solid').click();
    cy.get('[data-cy="confirm-password-field"] > [data-cy="input-field"]').clear('12345678P?');
    cy.get('[data-cy="confirm-password-field"] > [data-cy="input-field"]').type('123456789P?');
    cy.get('[data-cy="submit-button"] > .relative > .gradient').should('be.visible');
    cy.get('[data-cy="submit-button"] > .relative > .gradient').click();
    cy.get('[data-cy="text-component"]').should('be.visible');
    cy.get('[data-cy="otp-message"]').should('be.visible');
    cy.get('[data-cy="otp-field-1"]').clear('1');
    cy.get('[data-cy="otp-field-1"]').type('1');
    cy.get('[data-cy="otp-field-2"]').clear('2');
    cy.get('[data-cy="otp-field-2"]').type('2');
    cy.get('[data-cy="otp-field-3"]').clear('3');
    cy.get('[data-cy="otp-field-3"]').type('3');
    cy.get('[data-cy="otp-field-4"]').clear('4');
    cy.get('[data-cy="otp-field-4"]').type('4');
    cy.get('[data-cy="otp-field-5"]').clear('5');
    cy.get('[data-cy="otp-field-5"]').type('5');
    cy.get('[data-cy="otp-field-6"]').clear('6');
    cy.get('[data-cy="otp-field-6"]').type('6');
    cy.get('.relative > .gradient').should('be.visible');
    cy.get('.relative > .gradient').click();
    cy.get('.mb-8').should('be.visible');
    cy.get('.relative > .gradient').should('be.visible');
    cy.get('.relative > .gradient').click();
    cy.get('[data-cy="home-section-description"]').should('be.visible');
    cy.get('[data-cy="home-section-title"]').should('have.text', 'E-learning Revolution 2');
    cy.get('[data-cy="join-button"] > [data-cy="custom-icon"] > .fa-solid').click();
    cy.get('[data-cy="text-component"]').should('be.visible');
    cy.get('.relative > .gradient').should('be.visible');
    cy.get('[data-cy="input-field"]').clear('t');
    cy.get('[data-cy="input-field"]').type('tofik@gmail.com');
    cy.get('.relative > .gradient').should('be.visible');
    cy.get('.relative > .gradient').click();
    cy.get('[data-cy="login-contents"] > .mb-5').should('be.visible');
    cy.get('[data-cy="input-field"]').should('be.enabled');
    cy.get('[data-cy="input-field"]').clear('1');
    cy.get('[data-cy="input-field"]').type('123456789P?');
    cy.get('.relative > .gradient').should('be.visible');
    cy.get('[data-cy="toggle-password-visibility-icon"] > .fa-solid').click();
    cy.get('.relative > .gradient').click();
    cy.get('.relative > .gradient').click();
    cy.get('[data-cy="home-section-title"]').should('be.visible');
    /* ==== End Cypress Studio ==== */
  });
});
