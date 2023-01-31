describe('Dashboard Full Sukses', () => {
  it('Verifikasi Dashboard Full Sukses', () => {
    cy.visit('https://itera-qa.azurewebsites.net') //masuk website
    cy.get('.form-inline > .navbar-nav > :nth-child(2) > .nav-link').click() //klik button login masuk halaman login
    cy.get('#Username').type('wildanul12').should('be.visible') //masukan username
    cy.get('#Password').type('sanbercode12').should('be.visible') // masukan password
    cy.get('.btn-primary').click().should('be.visible') //klik button login

    //15.Verifikasi Search Name or Email Failed, Input Number Phone Failed (Negative)
    cy.get('#searching').type('12345').should('be.visible') //input number phone
    cy.get('.container > div > form > .btn').click().should('be.visible') //klik search
    cy.get('h1').should('be.visible') //masih di halaman dashboard
    cy.get('td').should('be.visible') //menampilkan data berdasarkan nilai name/email atau no match
    
  })
  Cypress.on('uncaught:exception', (err, runnable) => { 
    return false 
  })
})