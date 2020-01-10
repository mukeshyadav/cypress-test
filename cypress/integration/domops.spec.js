describe('UI TESTS', () => {
  beforeEach(() => {
    cy.visit('http://example.cypress.io/commands/actions')
  })

  it('should clear the inpute text field', () => {
    // cy.get('.action-email').type('fake@email.com').should('have.value', 'fake@email.com')
    cy.get('.action-email').type('fake@email.com').clear().should('have.value', '')
  })

  it('should able to edit on dblclick', () => {
    cy.get('.action-div').dblclick().should('not.be.visible').should('have.value', '')
  })

  it('should check the first checkbox', () => {
    cy.get('.action-checkboxes [type="checkbox"]').check(['checkbox1', 'checkbox3']).should('be.checked')
  })

  it('should uncheck the checkbox', () => {
    cy.get('.action-checkboxes [type="checkbox"]').check(['checkbox1', 'checkbox3']).should('be.checked')
    cy.get(".action-checkboxes [type='checkbox']").uncheck(['checkbox1']).should('not.be.checked')
  })

  it('should select value from dropdown', () => {
    cy.get('.action-select').select('apples').should('contain', 'apples')
  })

  it('should select multiple values from dropdown', () => {
    cy.get('.action-select-multiple').select(['apples', 'oranges'])
  })
})
