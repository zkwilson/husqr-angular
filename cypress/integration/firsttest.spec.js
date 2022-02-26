

describe('Husqr-test', () => {
  const myHusqBody = 'My first e2e test'

  before(() => {
    cy.visit('localhost:4200')

    cy.fixture('login').then((login) => {
      cy.get('input#username')
        .type(login.username)

      cy.get('input#password')
        .type(login.password)

      cy.get('.btn').click()
    })
  })


  it('composes a husq', () => {

    cy.get('a#compose-link').click()

    cy.get('textarea').type(myHusqBody)

    cy.get('.btn').click()

    cy.get('div.husq-body .husq-message').last().should('have.text', myHusqBody)
  })

  it('deletes a husq', () => {

    cy.get('button#delete-btn').last().click()

    cy.get('div.husq-body .husq-message').last().should('not.have.text', myHusqBody)
  })

  it('deletes a friend', () => {

    cy.get('a#friends-link').click()

    cy.get('.friend-body a').first().click()

    cy.get('.unfriend-btn').click()

    cy.get('.friends-list .header .friend-body').should('have.length', 1)
  })

  it('adds a friend back', () => {

    cy.get('.add-friend-btn').click()

  })

  it('edits profile', () => {

    cy.fixture('user').then((user) => {

      cy.get('a#profile-link').click()

      cy.get('.edit-button').click()

      cy.get('#name').clear()
        .type(user.name)

      cy.get('#location').clear()
        .type(user.location)

      cy.get('#age').clear()
        .type(user.age)

      cy.get('.submit').click()

      cy.get('.card .name').should('have.text', user.name)
      cy.get('.card .location').should('have.text', user.location)
      cy.get('.card .age').should('have.text', user.age)
    })
  })

  it('logs out', () => {
    cy.get('a.logout').click()

    cy.get('a.logout').should('not.exist')
  })

  it('registers user', () => {
    cy.fixture('register').then((register) => {
      cy.get('.register-btn').click()

      cy.get('#name').type(register.name)
      cy.get('#username').type(register.username)
      cy.get('#password').type(register.password)
      cy.get('#age').type(register.age)

      cy.get('.btn').click()
    })
  })

})
