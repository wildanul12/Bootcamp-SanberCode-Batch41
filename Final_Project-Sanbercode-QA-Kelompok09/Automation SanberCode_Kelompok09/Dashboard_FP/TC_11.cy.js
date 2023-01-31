describe('Dashboard Full Sukses', () => {
  it('Verifikasi Dashboard Full Sukses', () => {
    cy.visit('https://itera-qa.azurewebsites.net') //masuk website
    cy.get('.form-inline > .navbar-nav > :nth-child(2) > .nav-link').click() //klik button login masuk halaman login
    cy.get('#Username').type('wildanul12').should('be.visible') //masukan username
    cy.get('#Password').type('sanbercode12').should('be.visible') // masukan password
    cy.get('.btn-primary').click().should('be.visible') //klik button login

    cy.get('#searching').type('sanber').should('be.visible') //ketik sanber
    cy.get('.container > div > form > .btn').click() //klik search
    cy.get('tbody > :nth-child(3) > :nth-child(1)').should('be.visible') //validasi nama sanber
    cy.get('tbody > :nth-child(3) > :nth-child(6)').should('be.visible') //validasi email sanber

    //6.Verifikasi button edit setelah search sukses (Positive)
    cy.get(':nth-child(3) > :nth-child(7) > .btn-outline-primary').click().should('be.visible') //klik button edit pada bagian search
    cy.get('h2').should('be.visible') //masuk halaman edit sukses

  })
  Cypress.on('uncaught:exception', (err, runnable) => { 
    return false 
  })
})
    