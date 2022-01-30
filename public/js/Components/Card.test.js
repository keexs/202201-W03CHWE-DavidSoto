import PokemonCard from "./Card.js";

describe("Given a card component", () => {
  describe("When it's generated", () => {
    test("Then it must create a 'div' component", () => {
      const container = document.body;
      const pikachu = {
        name: "pikachu",
        id: "25",
        sprites: { front_default: "pikachuImg" },
      };

      new PokemonCard(container, "div", pikachu);

      expect(container.querySelector("div")).not.toBeNull();
    });
  });
  describe("When given a pokemon with pikachu name", () => {
    test("Then it must render pikachu in the html", () => {
      const container = document.body;
      const pikachu = {
        name: "pikachu",
        id: "25",
        sprites: { front_default: "pikachuImg" },
      };

      const pokemonObj = new PokemonCard(container, "div", pikachu);

      expect(pokemonObj.pokemon.name).toBe(pikachu.name);
    });
  });
});
