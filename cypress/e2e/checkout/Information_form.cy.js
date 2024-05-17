import 'cypress-xpath';

describe('"Information" form filled with valid data', () => {
  it('Should successfully save the data and once the button is clicked, user should be navigated to the "Shipping" form', () => {

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

  cy.get('#email').type('testemaissssssssssssssl@gmail.com')
  cy.get('#Select0').select(1)
  cy.get('#TextField0').type('firstntest')
  cy.get('#TextField1').type('lastnametest')
  cy.get('#TextField2').type('comptest')
  cy.get('#shipping-address1').type('sttest')
  cy.get('#TextField4').type('addresstest')
  cy.get('#TextField5').type('1010')
  cy.get('#TextField6').type('Pr')
  cy.get('#TextField7').type('1234567744')

  cy.xpath('/html/body/div[1]/div[1]/div/div/div[2]/div[2]/div[1]/div/main/div/div/div/div/form/div[1]/div/div/div[2]/div/div[2]/div/button').click()

  cy.xpath('/html/body/div[1]/div[1]/div/div/div[2]/div[2]/div[1]/div/main/div/div/div/div/div[2]/form/div[1]/div/div/div/div/div[1]/section/div').should('be.visible')
  })
})