describe('Positive Login', () => {

  it('Verifikasi Login dan logout sukses', () => {
    cy.visit('https://the-internet.herokuapp.com/login') //masuk website
  
    cy.get('#username').type('tomsmith').should('be.visible') //input username
    cy.wait(2000)
    cy.get('#password').type('SuperSecretPassword!') //input password
    cy.wait(2000)
    cy.get('.fa').click() //klik login
    cy.wait(2000)
    cy.get('h2').should('be.visible') //menampilkan halaman awal setelah login sukses
    cy.wait(4000)
    cy.get('.icon-2x').click() //klik logout
  
  })
  
  })