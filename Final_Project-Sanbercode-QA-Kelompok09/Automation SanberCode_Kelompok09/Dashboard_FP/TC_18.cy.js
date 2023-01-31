describe('Dashboard Full Sukses', () => {
  it('Verifikasi Dashboard Full Sukses', () => {
    cy.visit('https://itera-qa.azurewebsites.net') //masuk website
    cy.get('.form-inline > .navbar-nav > :nth-child(2) > .nav-link').click() //klik button login masuk halaman login
    cy.get('#Username').type('wildanul12').should('be.visible') //masukan username
    cy.get('#Password').type('sanbercode12').should('be.visible') // masukan password
    cy.get('.btn-primary').click().should('be.visible') //klik button login

    //16.Verifikasi data harus tampil di dashboard Sukses (Positive)
    cy.get('tbody > :nth-child(2) > :nth-child(1)').should('be.visible') //menampilkan name pertama
    cy.get('tbody > :nth-child(2) > :nth-child(2)').should('be.visible') //menampilkan company pertama
    cy.get('tbody > :nth-child(2) > :nth-child(3)').should('be.visible') //menampilkan address pertama
    cy.get('tbody > :nth-child(2) > :nth-child(4)').should('be.visible') //menampilkan city pertama
    cy.get('tbody > :nth-child(2) > :nth-child(5)').should('be.visible') //menampilkan phone pertama
    cy.get(':nth-child(2) > :nth-child(6)').should('be.visible') //menampilkan email pertama
    cy.get(':nth-child(520) > :nth-child(1)').should('be.visible') //menampilkan name ke 520

  })
  Cypress.on('uncaught:exception', (err, runnable) => { 
    return false 
  })
})