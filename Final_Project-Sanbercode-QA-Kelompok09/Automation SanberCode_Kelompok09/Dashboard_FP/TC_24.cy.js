describe('Dashboard Full Sukses', () => {
  it('Verifikasi Dashboard Full Sukses', () => {
    cy.visit('https://itera-qa.azurewebsites.net') //masuk website
    cy.get('.form-inline > .navbar-nav > :nth-child(2) > .nav-link').click() //klik button login masuk halaman login
    cy.get('#Username').type('wildanul12').should('be.visible') //masukan username
    cy.get('#Password').type('sanbercode12').should('be.visible') // masukan password
    cy.get('.btn-primary').click().should('be.visible') //klik button login

    //22.Verifikasi link back to list sukses, setelah klik delete sukses (Positive)
    cy.get(':nth-child(2) > :nth-child(7) > .btn-outline-danger').click().should('be.visible')   //klik button delete
    cy.get('h2').should('be.visible')   //masuk halaman delete
    cy.get('.btn-link').click().should('be.visible')   //Klik link back to list
    cy.get('h1').should('be.visible')   //masuk halaman dashboard

  })
  Cypress.on('uncaught:exception', (err, runnable) => { 
    return false 
  })
})