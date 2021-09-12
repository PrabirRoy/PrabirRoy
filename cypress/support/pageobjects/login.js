  export default class login {

    getEmail(){
        return cy.get('#email')
    }

    getPassword(){
        return cy.get('#password')
    }

    getSubmitbutton(){
        return cy.get('.button')
    }
  }