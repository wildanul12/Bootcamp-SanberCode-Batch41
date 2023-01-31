describe('Dashboard Full Sukses', () => {
  it('Verifikasi Dashboard Full Sukses', () => {
    cy.visit('https://itera-qa.azurewebsites.net') //masuk website
    cy.get('.form-inline > .navbar-nav > :nth-child(2) > .nav-link').click() //klik button login masuk halaman login
    cy.get('#Username').type('wildanul12').should('be.visible') //masukan username
    cy.get('#Password').type('sanbercode12').should('be.visible') // masukan password
    cy.get('.btn-primary').click().should('be.visible') //klik button login

    //17.Verifikasi button edit sukses (Positive)
    cy.get(':nth-child(2) > :nth-child(7) > .btn-outline-primary').click().should('be.visible') //klik button edit
    cy.get('h2').should('be.visible').should('be.visible') //masuk halaman edit
    

  })
  Cypress.on('uncaught:exception', (err, runnable) => { 
    return false 
  })
})