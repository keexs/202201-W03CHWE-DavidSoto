import Component from "./Component.js";
import PokemonCard from "./Card.js";

class PokemonListGenerator extends Component {
  startPoint;
  endPoint;
  constructor(parentElement, startPoint, endPoint) {
    super(parentElement, "pokeListGenerator", "div");

    this.startPoint = startPoint;
    this.endPoint = endPoint;

    this.pokeListGenerator();
  }

  pokeListGenerator() {
    for (let i = this.startPoint; i <= this.endPoint; i++) {
      const pokemonID = i;

      const pokemonAPI = async () => {
        const pokemonArray = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonID.toString()}`
        );
        const pokemonObject = await pokemonArray.json();

        new PokemonCard(
          document.querySelector(".pokeListGenerator"),
          "div",
          pokemonObject
        );
      };
      pokemonAPI();
    }
  }
}

export default PokemonListGenerator;
