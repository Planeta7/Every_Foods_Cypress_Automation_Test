import 'cypress-xpath';

describe('Delivery for 10+ meals ', () => {
  it('Should disable the checkout button as long as the items are less than 10, and display an error message', () => {

  cy.visit('https://every-foods.com/')
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })

  cy.xpath('/html/body/div[1]/div[1]/section[1]/div/div[1]/div/div/a').click()
  cy.xpath('/html/body/div[1]/div[1]/div[2]/div[2]/div[3]/button[2]/div').click()

  cy.xpath('/html/body/div[1]/div[1]/div[2]/div[2]/div[4]/button').click()

    cy.get('.plus-minus-button').eq(2).click()
    cy.xpath('./html/body/div[1]/div[1]/div[2]/div/div[2]/div[2]/div[2]/div[2]/div[5]/div[2]/div/button[2]').click()
    cy.wait(1000)
    cy.xpath('./html/body/div[1]/div[1]/div[2]/div/div[2]/div[2]/div[2]/div[2]/div[5]/div[2]/div/button[2]').click()
    cy.wait(1000)
    cy.xpath('./html/body/div[1]/div[1]/div[2]/div/div[2]/div[2]/div[2]/div[2]/div[5]/div[2]/div/button[2]').click()
    cy.wait(1000)
    cy.xpath('./html/body/div[1]/div[1]/div[2]/div/div[2]/div[2]/div[2]/div[2]/div[5]/div[2]/div/button[2]').click()
    cy.wait(1000)
    cy.xpath('./html/body/div[1]/div[1]/div[2]/div/div[2]/div[2]/div[2]/div[2]/div[5]/div[2]/div/button[2]').click()
       
    cy.xpath('/html/body/div[1]/div[1]/div[1]/div/button[2]').click()

    cy.xpath('/html/body/div[9]/div/div/div/aside/div[3]/div[2]/div').click()
   
  cy.xpath('/html/body/div[9]/div/div/div/aside/div[3]/div[2]/div[1]/div/div/span').should('contain','Bitte legen Sie Bowls im Wert von 4 in Ihren Warenkorb, um zur Kasse zu gelangen')
 })
})