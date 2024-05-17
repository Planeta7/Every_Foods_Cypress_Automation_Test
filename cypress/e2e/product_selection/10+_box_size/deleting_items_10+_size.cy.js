import 'cypress-xpath';

describe('Deleting all items in a 10+ size box', () => {
  it('Should successfully delete all cart items and display a message indicating that the cart is empty', () => {

  cy.visit('https://every-foods.com/')
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
  cy.xpath('/html/body/div[1]/div[1]/section[1]/div/div[1]/div/div/a').click()
  cy.wait(777)
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
    cy.wait(1000)
    cy.xpath('./html/body/div[1]/div[1]/div[2]/div/div[2]/div[2]/div[2]/div[2]/div[5]/div[2]/div/button[2]').click()
    cy.wait(1000)
    cy.wait(1000)
    cy.xpath('./html/body/div[1]/div[1]/div[2]/div/div[2]/div[2]/div[2]/div[2]/div[5]/div[2]/div/button[2]').click()
    cy.wait(1000)
    cy.xpath('./html/body/div[1]/div[1]/div[2]/div/div[2]/div[2]/div[2]/div[2]/div[5]/div[2]/div/button[2]').click()
  
    cy.xpath('/html/body/div[1]/div[1]/div[2]/div/div[2]/div[2]/div[2]/div[2]/div[6]/div[2]/button').click()
    cy.xpath('./html/body/div[1]/div[1]/div[1]/div/button[2]').click()
     
    cy.xpath('/html/body/div[9]/div/div/div/aside/div[2]/div/div/div/div[2]/div/button[1]').click()
    cy.wait(1000)
    cy.xpath('/html/body/div[9]/div/div/div/aside/div[2]/div/div/div[1]/div[2]/div/button[1]').click()

    cy.xpath('/html/body/div[9]/div/div/div/aside/div[2]/div/div[1]/div/div[2]/div/button[1]').click()
    cy.xpath('/html/body/div[9]/div/div/div/aside/div[2]/div/div[2]/button').click()
 
  cy.xpath('/html/body/div[9]/div/div/div/aside/div[2]/div/div/p').should('contain', 'Dein Warenkorb ist leer')
      

  })
 })
