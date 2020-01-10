describe('UI TESTS', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should open login page correctly', () => {
    cy.get('[data-cy=login-title]').should('have.length', 1)
    cy.get('[data-cy=login-title]').should('be.visible')
  })

  it('should not allow to login if username not provided', () => {
    cy.get('[data-cy=password]').type(123456)
    cy.get('[data-cy=btn-submit]').click()
    cy.get('[data-cy=login-title]').should('have.length', 1)
    cy.get('[data-cy=title-loggedin]').should('have.length', 0)
  })

  it('should not allow to login if password not provided', () => {
    cy.get('[data-cy=username]').type('mukesh@yadav.com')
    cy.get('[data-cy=btn-submit]').click()
    cy.get('[data-cy=login-title]').should('have.length', 1)
    cy.get('[data-cy=title-loggedin]').should('have.length', 0)
  })

  it('If user logged in with valid credentials, go to success page', () => {
    cy.get('[data-cy=username]').type('mukesh@yadav.com')
    cy.get('[data-cy=password]').type(123456)
    cy.get('[data-cy=btn-submit]').click()
    cy.get('[data-cy=btn-loggedout]').should('be.visible')
    cy.get('[data-cy=btn-loggedout]').should('have.class', 'btn-secondary')
    cy.get('[data-cy=btn-loggedout]').should('not.have.class', 'btn-some')
  })

  it('should fail and take screenshot', () => {
    cy.get('[data-cy=logintext]').should('exist')
  })
})
