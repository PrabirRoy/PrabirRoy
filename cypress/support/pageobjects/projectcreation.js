export default class projectcreation {
getProjecttab(){

    return cy.get('.icon-projects > use')
}

getNewProjectButton(){

    return cy.get('.button--accent')
}

getName(){
    return cy.get('#input-field-name')
}

getDescription(){
    return cy.get('#textarea-field-nameTextArea')
}
getAddButton(){
    return cy.get('.library-name-modal__container > .button')
}
getData(){
    return cy.get(':nth-child(1) > .ConfigurationListHeadWrapper > .saved-project__headline > .saved-project__headline__name > .saved-project__headline__name__text')
}

}

