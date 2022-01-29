import Component from "./Component.js";

describe("Given a Component component", () => {
  describe("When it's generated", () => {
    test("Then it must create a 'div' component", () => {
      const container = document.body;

      new Component(container);

      expect(container.querySelector("div")).not.toBeNull();
    });
  });
});
