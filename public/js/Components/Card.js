import Component from "./Component";

// eslint-disable-next-line no-unused-vars
class PokemonCard extends Component {
  pokmonID;

  constructor(parentElement, htmlTag, pokemonID) {
    super(parentElement, "pokemonCard", htmlTag);

    this.pokmonID = pokemonID;
  }
}
