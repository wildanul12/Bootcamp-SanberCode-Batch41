describe('Dashboard Full Sukses', () => {
  it('Verifikasi Dashboard Full Sukses', () => {
    cy.visit('https://itera-qa.azurewebsites.net') //masuk website
    cy.get('.form-inline > .navbar-nav > :nth-child(2) > .nav-link').click() //klik button login masuk halaman login
    cy.get('#Username').type('wildanul12').should('be.visible') //masukan username
    cy.get('#Password').type('sanbercode12').should('be.visible') // masukan password
    cy.get('.btn-primary').click().should('be.visible') //klik button login

    //14.Verifikasi Search Name or Email Failed, Input Company, Address, City Failed (Negative)
    cy.get('#searching').type('quality assurance engineer').should('be.visible') //input company
    cy.get('.container > div > form > .btn').click().should('be.visible') //klik search
    cy.get('h1').should('be.visible') //masih di halaman dashboard
    cy.get('td').should('be.visible') //menampilkan no match

    cy.get('#searching').type('jl.bojong wetan').should('be.visible') //input address
    cy.get('.container > div > form > .btn').click().should('be.visible') //klik search
    cy.get('h1').should('be.visible') //masih di halaman dashboard
    cy.get('td').should('be.visible') //menampilkan no match
  
    cy.get('#searching').type('bandung kota').should('be.visible') //input city
    cy.get('.container > div > form > .btn').click().should('be.visible') //klik search
    cy.get('h1').should('be.visible') //masih di halaman dashboard
    cy.get('td').should('be.visible') //menampilkan no match

  })
  Cypress.on('uncaught:exception', (err, runnable) => { 
    return false 
  })
})