import 'cypress-xpath';

describe('Delivery for 6+ meals, with less than 6 meals ', () => {
  it('Should disable the checkout button as long as the items are less than 6, and display an error message', () => {

  cy.visit('https://every-foods.com/')
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })

  cy.xpath('/html/body/div[1]/div[1]/section[1]/div/div[1]/div/div/a').click()
  cy.xpath('/html/body/div[1]/div[1]/div[2]/div[2]/div[3]/button[1]').click()

  cy.xpath('/html/body/div[1]/div[1]/div[2]/div[2]/div[4]/button').click()

      cy.get('.plus-minus-button').eq(2).click()
      cy.get('.plus-minus-button').eq(3).click()
      cy.get('.plus-minus-button').eq(4).click()

    cy.xpath('/html/body/div[1]/div[1]/div[1]/div/button[2]').click()


    cy.xpath('/html/body/div[9]/div/div/div/aside/div[3]/div[2]/div').click()

   cy.xpath('/html/body/div[9]/div/div/div/aside/div[3]/div[2]/div[1]/div/div/span').should('be.visible')
  })
})