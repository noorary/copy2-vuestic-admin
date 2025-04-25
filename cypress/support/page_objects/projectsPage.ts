import { testIdValues } from '../../support/testIds'

export class ProjectsPage {
  visit() {
    cy.visit('/projects')
  }

  resetProject() {
    cy.request('PUT', 'http://localhost:3000/projects/1e7b566f-27c3-41c9-9a42-a10e3231671c', {
      id: '1e7b566f-27c3-41c9-9a42-a10e3231671c',
      project_name: 'Vuestic',
      project_owner: '339cbaac-2731-47a6-b0bb-e68be14addb9',
      team: [
        '339cbaac-2731-47a6-b0bb-e68be14addb9',
        'a65cbfa0-6802-480d-8bb4-26c549139b03',
        '4e552ab3-a423-4ac1-a021-67cace904667',
      ],
      status: 'in progress',
      created_at: '2023-11-20T00:00:00',
      updated_at: '2025-02-03T18:25:20.967393',
    })
  }

  clickCardsButton() {
    return cy.getByLocator(testIdValues.cardsOption).click()
  }

  getCardProjectName() {
    return cy.getByLocator(testIdValues.cardProjectName)
  }

  clickTableButton() {
    return cy.getByLocator(testIdValues.tableOption).click()
  }

  getTableProjectName() {
    return cy.getByLocator(testIdValues.projectName)
  }

  getTableProjectCreationDate() {
    return cy.getByLocator(testIdValues.projectCreationDate)
  }

  clickFirstEditProjectButton() {
    return cy.getByLocator(testIdValues.editProjectButton).first().click()
  }

  getProjectNameInput() {
    return cy.getByLocator(testIdValues.projectNameInput)
  }

  clickSaveProjectButton() {
    return cy.getByLocator(testIdValues.saveProjectButton).click()
  }

  getProjectRow() {
    return cy.getByLocator(`${testIdValues.projectRow}-0`)
  }
}

export const projectsPage = new ProjectsPage()
