import 'cypress-xpath';

describe('Adding items to cart', () => {
  it('Should successfully add to items to cart, and increase the cart number', () => {

  cy.visit('https://every-foods.com/') 
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })

  cy.xpath('/html/body/div[1]/div[1]/header/nav/div[2]/div[3]/div/button').invoke('text').as('initialCartCount')
  
  cy.xpath('/html/body/div[1]/div[1]/section[1]/div/div[1]/div/div/a').click()
  cy.xpath('/html/body/div[1]/div[1]/div[2]/div[2]/div[4]/button').click()

  cy.get('.plus-minus-button').eq(2).click()
  cy.get('.plus-minus-button').eq(3).click()
  cy.get('.plus-minus-button').eq(4).click()
  cy.xpath('/html/body/div[1]/div[1]/div[2]/div/div[2]/div[2]/div[1]/div[2]/div[1]/div[5]/div[2]/div/button[2]').click()
  cy.get('.plus-minus-button').eq(5).click()
  cy.get('.plus-minus-button').eq(6).click()
  cy.get('.plus-minus-button').eq(7).click()
  cy.get('.plus-minus-button').eq(8).click()
  // cy.get('.plus-minus-button').eq(2).click()
  // cy.xpath('./html/body/div[1]/div[1]/div[2]/div/div[2]/div[2]/div[2]/div[2]/div[5]/div[2]/div/button[2]').click()
  // cy.wait(1000)
  // cy.xpath('./html/body/div[1]/div[1]/div[2]/div/div[2]/div[2]/div[2]/div[2]/div[5]/div[2]/div/button[2]').click()
  // cy.wait(1000)
  // cy.get('.plus-minus-button').eq(5).click()
  // cy.xpath('/html/body/div[1]/div[1]/div[2]/div/div[2]/div[2]/div[1]/div[2]/div[1]/div[5]/div[2]/div/button[2]').click()
  // cy.wait(1000)
  // cy.xpath('/html/body/div[1]/div[1]/div[2]/div/div[2]/div[2]/div[1]/div[2]/div[1]/div[5]/div[2]/div/button[2]').click()
  // cy.wait(1000)

  cy.xpath('/html/body/div[1]/div[1]/div[1]/div/button[2]/span').invoke('text').as('updatedCartCount')

  cy.get('@initialCartCount').then(initialCount => {
  cy.get('@updatedCartCount').then(updatedCount => {
    const initial = parseInt(initialCount) || 0
    const updated = parseInt(updatedCount) || 0

    expect(updated).to.be.greaterThan(initial)
  })
})
})
})