import { cyan } from "@material-ui/core/colors"

describe("renders the home page", () => {
    it("renders correctly", () => {
        cy.visit("/")
    })
})