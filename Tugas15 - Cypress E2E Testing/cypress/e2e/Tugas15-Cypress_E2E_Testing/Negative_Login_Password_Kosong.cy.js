describe('Negative Login, Password Kosong', () => {

  it('Verifikasi Login Gagal, Password Kosong', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
  
    cy.get('#username').type('tomsmith').should('be.visible')
    cy.wait(2000)
    cy.get('#password').should('be.visible')
    cy.wait(2000)
    cy.get('.fa').click().should('be.visible')
    cy.wait(3000)
    cy.get('#flash').should('be.visible')
  
  })
  
  })