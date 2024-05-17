import 'cypress-xpath';

describe('Delivery for 16+ meals ', () => {
  it('Should successfully add to items to cart, and enable the checkout button once the items are equal ore greater than 16', () => {

  cy.visit('https://every-foods.com/')
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })

  cy.xpath('/html/body/div[1]/div[1]/section[1]/div/div[1]/div/div/a').click()
  cy.xpath('/html/body/div[1]/div[1]/div[2]/div[2]/div[3]/button[3]/div').click()

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
       cy.get('.plus-minus-button').eq(3).click()
       cy.wait(1000)
       cy.xpath('/html/body/div[1]/div[1]/div[2]/div/div[2]/div[2]/div[1]/div[2]/div[1]/div[5]/div[2]/div/button[2]').click()
       cy.wait(1000)
       cy.xpath('/html/body/div[1]/div[1]/div[2]/div/div[2]/div[2]/div[1]/div[2]/div[1]/div[5]/div[2]/div/button[2]').click()
       cy.wait(1000)
       cy.xpath('/html/body/div[1]/div[1]/div[2]/div/div[2]/div[2]/div[1]/div[2]/div[1]/div[5]/div[2]/div/button[2]').click()
       cy.wait(1000)
       cy.get('.plus-minus-button').eq(9).click()
       cy.xpath('./html/body/div[1]/div[1]/div[2]/div/div[2]/div[2]/div[1]/div[2]/div[1]/div[8]/div[2]/div/button[2]').click()
       cy.wait(1000)
       cy.xpath('./html/body/div[1]/div[1]/div[2]/div/div[2]/div[2]/div[1]/div[2]/div[1]/div[8]/div[2]/div/button[2]').click()
       cy.wait(1000)
       cy.get('.plus-minus-button').eq(10).click()
       cy.wait(1000)
       cy.get('.plus-minus-button').eq(11).click()
       cy.wait(1000)
       cy.xpath('/html/body/div[1]/div[1]/div[2]/div/div[2]/div[2]/div[3]/div[2]/div[4]/div[2]/div/button[2]').click()

     cy.xpath('/html/body/div[9]/div/div/div/aside/div[3]/div[2]/div/button').should('not.be.disabled');
  })
})