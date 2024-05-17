import 'cypress-xpath';

describe('Blank textboxes in "Inofrmation" form', () => {
  it('Should block the user to procceed with shipping, alert messages should be displayed', () => {

  cy.visit('https://every-foods.com/')
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })

  cy.xpath('/html/body/div[1]/div[1]/section[1]/div/div[1]/div/div/a').click()
  cy.wait(500)
  cy.xpath('/html/body/div[1]/div[1]/div[2]/div[2]/div[3]/button[1]').click()

  cy.xpath('/html/body/div[1]/div[1]/div[2]/div[2]/div[4]/button').click()

  
  cy.get('.plus-minus-button').eq(2).click()
  cy.xpath('./html/body/div[1]/div[1]/div[2]/div/div[2]/div[2]/div[2]/div[2]/div[5]/div[2]/div/button[2]').click()
  cy.wait(1000)
  cy.xpath('./html/body/div[1]/div[1]/div[2]/div/div[2]/div[2]/div[2]/div[2]/div[5]/div[2]/div/button[2]').click()
  cy.wait(1000)
  cy.get('.plus-minus-button').eq(5).click()
  cy.xpath('/html/body/div[1]/div[1]/div[2]/div/div[2]/div[2]/div[1]/div[2]/div[1]/div[5]/div[2]/div/button[2]').click()
  cy.wait(1000)
  cy.xpath('/html/body/div[1]/div[1]/div[2]/div/div[2]/div[2]/div[1]/div[2]/div[1]/div[5]/div[2]/div/button[2]').click()
  cy.wait(1000)
  
  cy.xpath('/html/body/div[9]/div/div/div/aside/div[3]/div[2]/div/button').click()

  cy.xpath('/html/body/div[1]/div[1]/div/div/div[2]/div[2]/div[1]/div/main/div/div/div/div/form/div[1]/div/div/div[2]/div/div[2]/div/button').click()

    cy.get('#error-for-email').should('contain', 'E-Mail-Adresse eingeben')
    cy.get('#error-for-TextField0').should('contain', 'Gib einen Vornamen ein')
    cy.get('#error-for-TextField1').should('contain', 'Gib einen Nachnamen ein')
    cy.get('#error-for-shipping-address1').should('contain', 'Gib eine Adresse ein')
    cy.get('#error-for-TextField5').should('contain', 'Gib eine Postleitzahl ein')
    cy.get('#error-for-TextField6').should('contain', 'Gib eine Stadt ein')
    cy.get('#error-for-TextField7').should('contain', 'Eine Telefonnummer eingeben')
  })
})