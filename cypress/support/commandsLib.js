Cypress.Commands.add('login', (user, password) => {  // test basico sin api stuff

  cy.get('[data-test="username"]').clear().then($input => {
    if (user === '') {
      $input.val(user);
      cy.wrap($input).blur(); // Forzar que el campo se desenfoque para activar cualquier listener
    } else {
      cy.wrap($input).type(user);
    }
  })
  cy.get('[data-test="password"]').clear().then($input => {
    if (password === '') {
      $input.val(password);
      cy.wrap($input).blur(); // Forzar que el campo se desenfoque para activar cualquier listener
    } else {
      cy.wrap($input).type(password);
    }
  })
  cy.get('#login-button').click();

})

Cypress.Commands.add('loginTestApi', (type, api) => { // test con captura de API
  cy.fixture('usersData').then((data) => {
    const formData = data[type]
    cy.log(formData) // Este comando registra el contenido de formData en la consola de Cypress.
    cy.intercept('POST', 'https://events.backtrace.io/api/summed-events/submit?universe=UNIVERSE&token=TOKEN').as('testAPI')

    cy.get('[data-test="username"]').clear().then($input => {
      if (formData.Username === '') {
        $input.val(formData.Username);
        cy.wrap($input).blur(); // Forzar que el campo se desenfoque para activar cualquier listener
      } else {
        cy.wrap($input).type(formData.Username);
      }
    })

    cy.get('[data-test="password"]').clear().then($input => {
      if (formData.Password === '') {
        $input.val(formData.Password);
        cy.wrap($input).blur(); // Forzar que el campo se desenfoque para activar cualquier listener
      } else {
        cy.wrap($input).type(formData.Password);
      }
    })

    cy.wait(500);
    cy.get('#login-button').click();
    // Agregado tiempo de espera porque de otro modo tendia a no recibir la respuesta de la API
    cy.wait('@testAPI', { timeout: 20000 }).its('response.statusCode').should('eq', api);

  })
})

Cypress.Commands.add('loginTest', (type) => { // test sin captura de API
  cy.fixture('usersData').then((data) => {
    const formData = data[type]
    cy.log(formData) // Este comando registra el contenido de formData en la consola de Cypress.

    cy.get('[data-test="username"]').clear().then($input => {
      if (formData.Username === '') {
        $input.val(formData.Username);
        cy.wrap($input).blur(); // Forzar que el campo se desenfoque para activar cualquier listener
      } else {
        cy.wrap($input).type(formData.Username);
      }
    })

    cy.get('[data-test="password"]').clear().then($input => {
      if (formData.Password === '') {
        $input.val(formData.Password);
        cy.wrap($input).blur(); // Forzar que el campo se desenfoque para activar cualquier listener
      } else {
        cy.wrap($input).type(formData.Password);
      }
    })

    cy.wait(500);
    cy.get('#login-button').click();

  })

})