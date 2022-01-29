import Component from "./Component";

class PokemonCard extends Component {
  pokmonID;

  constructor(parentElement, htmlTag, pokemonID) {
    super(parentElement, "pokemonCard", htmlTag);

    this.pokmonID = pokemonID;
  }
}
