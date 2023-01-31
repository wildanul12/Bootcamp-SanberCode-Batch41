describe('Edit Costumer Feature', () => {
  it('Can Update Data Costumer with valid data(All Fields) when Detail page', () => {
    cy.visit('https://itera-qa.azurewebsites.net/home')
    cy.get('.form-inline > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)').click()
    cy.get('#Username').type("testingnagashi1")

    cy.get('#Password').type("naga1234")

    cy.get('input.btn:nth-child(1)').click()

    cy.get('.table > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(7) > a:nth-child(2)').click()

    cy.get('a.btn:nth-child(1)').click()

    cy.get('#Name').clear().type("M.Nagashi")

    cy.get('#Company').clear().type("Universitas Telkom")

    cy.get('#Address').clear().type("Jl. Bojongsoang")

    cy.get('#City').clear().type("Kabupaten Bandung, Jawa barat")

    cy.get('#Phone').clear().type("085346566969")

    cy.get('#Email').clear().type("nagashias17@gmail.com")

    cy.get('input.btn').click()

  })

  it('Can Update Data Costumer with valid data(One Fields) when Detail page', () => {
    cy.visit('https://itera-qa.azurewebsites.net/home')
    cy.get('.form-inline > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)').click()
    cy.get('#Username').type("testingnagashi1")

    cy.get('#Password').type("naga1234")

    cy.get('input.btn:nth-child(1)').click()

    cy.get('.table > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(7) > a:nth-child(2)').click()

    cy.get('a.btn:nth-child(1)').click()

    cy.get('#Phone').clear().type("085346566960")

    cy.get('input.btn').click()

  })

  it('Update Data Costumer  with Invalid format email when Detail page', () => {
    cy.visit('https://itera-qa.azurewebsites.net/home')
    cy.get('.form-inline > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)').click()
    cy.get('#Username').type("testingnagashi1")

    cy.get('#Password').type("naga1234")

    cy.get('input.btn:nth-child(1)').click()

    cy.get('.table > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(7) > a:nth-child(2)').click()

    cy.get('a.btn:nth-child(1)').click()

    cy.get('#Email').clear().type("nagashias17")

    cy.get('input.btn').click()

    cy.get('input.btn').find('Save')

  })

  it('Update Data Costumer  with empty name field when Detail page', () => {
    cy.visit('https://itera-qa.azurewebsites.net/home')
    cy.get('.form-inline > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)').click()
    cy.get('#Username').type("testingnagashi1")

    cy.get('#Password').type("naga1234")

    cy.get('input.btn:nth-child(1)').click()

    cy.get('.table > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(7) > a:nth-child(2)').click()

    cy.get('a.btn:nth-child(1)').click()

    cy.get('#Name').clear()

    cy.get('input.btn').find('Save')

  })

  it('Update Data Costumer  with empty all fields  when Detail page', () => {
    cy.visit('https://itera-qa.azurewebsites.net/home')
    cy.get('.form-inline > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)').click()
    cy.get('#Username').type("testingnagashi1")

    cy.get('#Password').type("naga1234")

    cy.get('input.btn:nth-child(1)').click()

    cy.get('.table > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(7) > a:nth-child(2)').click()

    cy.get('a.btn:nth-child(1)').click()
    
    cy.get('#Name').clear()

    cy.get('#Company').clear()

    cy.get('#Address').clear()

    cy.get('#City').clear()

    cy.get('#Phone').clear()

    cy.get('#Email').clear()

    cy.get('input.btn').click()

    cy.get('input.btn').find('Save')

  })

  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
})
