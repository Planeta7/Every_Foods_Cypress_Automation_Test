import 'cypress-xpath';

describe('"Payment" form filled with valid data', () => {
  it('Should successfully save the data, and navigate to "Review"', () => {

  cy.visit('https://every-foods.com/')
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })

  cy.xpath('/html/body/div[1]/div[1]/section[1]/div/div[1]/div/div/a').click()
  cy.wait(700)
  cy.xpath('/html/body/div[1]/div[1]/div[2]/div[2]/div[3]/button[1]').click({force: true})

  cy.xpath('/html/body/div[1]/div[1]/div[2]/div[2]/div[4]/button').click()

  
  cy.get('.plus-minus-button').eq(2).click()
  cy.xpath('./html/body/div[1]/div[1]/div[2]/div/div[2]/div[2]/div[2]/div[2]/div[5]/div[2]/div/button[2]').click()
  cy.wait(1500)
  cy.xpath('./html/body/div[1]/div[1]/div[2]/div/div[2]/div[2]/div[2]/div[2]/div[5]/div[2]/div/button[2]').click()
  cy.wait(1000)
  cy.get('.plus-minus-button').eq(5).click()
  cy.xpath('/html/body/div[1]/div[1]/div[2]/div/div[2]/div[2]/div[1]/div[2]/div[1]/div[5]/div[2]/div/button[2]').click()
  cy.wait(1000)
  cy.xpath('/html/body/div[1]/div[1]/div[2]/div/div[2]/div[2]/div[1]/div[2]/div[1]/div[5]/div[2]/div/button[2]').click({force:true})
  
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
  cy.wait(300)
  cy.xpath('./html/body/div[1]/div[1]/div/div/div[2]/div[2]/div[1]/div/main/div/div/div/div/div[2]/form/div[1]/div/div/div/div/div[1]/section/div/div[2]/div[1]/div/div/div[1]/div/div/div[2]/button').click()
  cy.get('#DatePicker0-date-24').click()
  cy.wait(4000)


  cy.xpath('/html/body/div[1]/div[1]/div/div/div[2]/div[2]/div[1]/div/main/div/div/div/div/div[2]/form/div[1]/div/div/div/div/div[2]/div[1]/button').click()
   
 cy.xpath('/html/body/div[1]/div[1]/div/div/div[2]/div[2]/div[1]/div/main/div/div/div/div/div[2]/div/div/form/div[1]/div/div/div[1]/section[1]/div').should('be.visible')
})
})