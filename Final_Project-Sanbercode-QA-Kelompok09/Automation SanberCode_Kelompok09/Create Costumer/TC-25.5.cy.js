describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://itera-qa.azurewebsites.net/')
    cy.wait(2)
    cy.get('.form-inline > .navbar-nav > :nth-child(2) > .nav-link').click()
    cy.get('#Username').type('chester13')
    cy.wait(1)
    cy.get('#Password').type('chester13')
    cy.wait(1)
    cy.get('.btn-primary').click()
    cy.wait(1)
    cy.get(':nth-child(4) > .btn').click()
    cy.wait(1)
    cy.get('.col-md-offset-2 > .btn').click()
    cy.get('.col-md-offset-2 > .btn')
    
    })
      }) 
      Cypress.on('uncaught:exception', (err, runnable) => {  
      return false
  })