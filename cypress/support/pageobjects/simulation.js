export default class simulation {

getNewSimulationbutton(){
    return cy.get('.configurations > .button')
}

getSimulationName(){
    return cy.get('#input-field-name')

}

getDescription(){
    return cy.get('#textarea-field-description')
}
 getNextButton(){
     return cy.get('.button')
 }
 
 getDiamondButton(){
     return cy.get('.action-diamond')
 }

 getSaveButton(){
     return cy.get('.node-params-form-wrapper-footer__buttons-container > :nth-child(1)')
 }

getExpand(){
    return cy.get(':nth-child(1) > .ConfigurationListHeadWrapper > .saved-project__headline > .saved-project__headline__name > .saved-project__headline__carat > .svg-icon > .icon-carat')
}



}