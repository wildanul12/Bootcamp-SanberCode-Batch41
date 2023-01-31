describe('template spec', () => {
  // TC_05 Positive Logout
  it('positive : logout', () => {
    cy.visit('https://itera-qa.azurewebsites.net')
    cy.get('.form-inline > .navbar-nav > :nth-child(2) > .nav-link').click()
    cy.get('#Username').type("miftakhulfitria")
    cy.get('#Password').type("miftakhulfitria")
    cy.get('.btn-primary').click()
    cy.get('.form-inline > .navbar-nav > :nth-child(2) > .nav-link').click()
  })

  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
})