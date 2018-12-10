// https://docs.cypress.io/api/introduction/api.html

describe('Meu primeiro teste', () => {
  it('visitando a url padrão', () => {
    cy.visit('/')
  })
})

describe('Editando um usuário', ()  => {
  it('Clicando no botão editar', () => {
    cy.wait(2000)
    cy.get('[data-cy=editar]').first().click()
  })
})
describe('Fechar Modal', ()  => {
  it('Clicando no botão fechar', () => {
    cy.wait(3000)
    cy.get('[data-cy=fechaModal]').first().click()
  })
})

// describe('Teste no About', () => {
//   it('Visitando a url about', () => {
//     cy.visit('/about')
//     cy.url().should('include', '/about')
//     cy.contains('h1', 'This is an about page')
//     cy.wait(1000)
//     cy.get('[data-cy=botao-cadastro]').click()
//     cy.wait(300)
//     cy.get('[data-cy=nome]').type('Lulux')
//     cy.wait(500)
//     cy.get('[data-cy=nome]').should('have.value', 'Lulux')
//     cy.wait(500)
//     cy.get('[data-cy=botao-finaliza]').click()
//   })
// })

//
// describe('Gerando build', () => {
//   it('Gerando build para servidor de homologação', () =>{
//     cy.exec('npm run build')
//   })
// })
