describe('Negative Login, Data Kosong', () => {

  it('Verifikasi Login Gagal, Data Kosong', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
  
    cy.get('#username').should('be.visible')
    cy.wait(2000)
    cy.get('#password').should('be.visible')
    cy.wait(2000)
    cy.get('.fa').click().should('be.visible')
    cy.wait(3000)
    cy.get('#flash').should('be.visible')
  
  })
  
  })