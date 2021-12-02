import { mount } from "@cypress/vue"
import { PazuzuInject } from "./index"

it("Passes msg prop correctly", () => {
  mount(PazuzuInject, {
    propsData: {
      msg: "Hello World"
    }
  })

  cy.get("h2").should("contain.text", "Hello World")
})
