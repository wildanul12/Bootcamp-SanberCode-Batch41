describe('Positive Negative Login', () => {

  it('Verifikasi Login dan logout sukses dan gagal', () => {
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

    //Username Salah
    cy.get('#username').type('wildan').should('be.visible')
    cy.wait(2000)
    cy.get('#password').type('SuperSecretPassword!').should('be.visible')
    cy.wait(2000)
    cy.get('.fa').click()
    cy.wait(3000)
    cy.get('#flash').should('be.visible')

    //Username Kosong
    cy.get('#username').should('be.visible')
    cy.wait(2000)
    cy.get('#password').type('SuperSecretPassword!').should('be.visible')
    cy.wait(2000)
    cy.get('.fa').click()
    cy.wait(3000)
    cy.get('#flash').should('be.visible')

    //Password Salah
    cy.get('#username').type('tomsmith').should('be.visible')
    cy.wait(2000)
    cy.get('#password').type('wildan').should('be.visible')
    cy.wait(2000)
    cy.get('.fa').click()
    cy.wait(3000)
    cy.get('#flash').should('be.visible')

    //Password Kosong
    cy.get('#username').type('tomsmith').should('be.visible')
    cy.wait(2000)
    cy.get('#password').should('be.visible')
    cy.wait(2000)
    cy.get('.fa').click()
    cy.wait(3000)
    cy.get('#flash').should('be.visible')

    //Data Salah
    cy.get('#username').type('wildan').should('be.visible')
    cy.wait(2000)
    cy.get('#password').type('wildan').should('be.visible')
    cy.wait(2000)
    cy.get('.fa').click()
    cy.wait(3000)
    cy.get('#flash').should('be.visible')

    //Data Kosong
    cy.get('#username').should('be.visible')
    cy.wait(2000)
    cy.get('#password').should('be.visible')
    cy.wait(2000)
    cy.get('.fa').click()
    cy.wait(3000)
    cy.get('#flash').should('be.visible')

  })
  
  })