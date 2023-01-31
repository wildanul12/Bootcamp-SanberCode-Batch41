describe('Negative Login Username Salah', () => {

  it('Verifikasi Login Gagal, Username Salah', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
  
    cy.get('#username').type('wildan').should('be.visible')
    cy.wait(2000)
    cy.get('#password').type('SuperSecretPassword!').should('be.visible')
    cy.wait(2000)
    cy.get('.fa').click().should('be.visible')
    cy.wait(3000)
    cy.get('#flash').should('be.visible')

  })
  
  })