import 'cypress-xpath';

describe('Price claculation for 6+ box size items', () => {
  it('should calculate and display  the price correctly ', () => {
    cy.visit('https://every-foods.com/')

    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
  
    cy.xpath('/html/body/div[1]/div[1]/section[1]/div/div[1]/div/div/a').click()
    cy.xpath('/html/body/div[1]/div[1]/div[2]/div[2]/div[3]/button[1]').click()
  
    cy.xpath('/html/body/div[1]/div[1]/div[2]/div[2]/div[4]/button').click()

    cy.wait(200)
    cy.get('.plus-minus-button').eq(2).click()
    cy.wait(500)
    cy.xpath('./html/body/div[1]/div[1]/div[2]/div/div[2]/div[2]/div[2]/div[2]/div[5]/div[2]/div/button[2]').click()
    cy.wait(1000)
    cy.xpath('./html/body/div[1]/div[1]/div[2]/div/div[2]/div[2]/div[2]/div[2]/div[5]/div[2]/div/button[2]').click()
    cy.wait(1000)
    cy.get('.plus-minus-button').eq(5).click()
    cy.xpath('/html/body/div[1]/div[1]/div[2]/div/div[2]/div[2]/div[1]/div[2]/div[1]/div[5]/div[2]/div/button[2]').click()
    cy.wait(1000)
    cy.xpath('/html/body/div[1]/div[1]/div[2]/div/div[2]/div[2]/div[1]/div[2]/div[1]/div[5]/div[2]/div/button[2]').click()
    cy.wait(1000)

    cy.xpath('/html/body/div[9]/div/div/div/aside/div[3]/div[1]/div/div/div/div[1]/div').invoke('text').then(originalTotalPriceText => {
      const originalTotalPrice = parseFloat(originalTotalPriceText.replace(/[^\d.]/g, ''))

      cy.xpath('/html/body/div[9]/div/div/div/aside/div[3]/div[1]/div/div/div/div[2]/span[2]').invoke('text').then(discountAmountText => {
        const discountAmount = parseFloat(discountAmountText.replace(/[^\d.]/g, ''))
        
      cy.xpath('/html/body/div[9]/div/div/div/aside/div[3]/div[1]/div/div/div/div[3]/span[2]').invoke('text').then(shippingFeesText => {
        const shippingFees = parseFloat(shippingFeesText.replace(/[^\d.]/g, ''))
      
          const discountedTotalPrice = originalTotalPrice -  discountAmount 
          const finalTotalPrice = discountedTotalPrice + shippingFees

          const formattedFinalTotalPrice = (finalTotalPrice / 100).toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(/\./g, '').replace('.', ',')

      cy.xpath('/html/body/div[9]/div/div/div/aside/div[3]/div[1]/div/span/div/div/div/span[2]', { timeout: 25000 })
      .invoke('text')
      .should('eq', formattedFinalTotalPrice + '€')
      })
    })
   })
  })
})
