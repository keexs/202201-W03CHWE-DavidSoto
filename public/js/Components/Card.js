import Component from "./Component.js";

// eslint-disable-next-line no-unused-vars
class PokemonCard extends Component {
  pokemon;

  constructor(parentElement, htmlTag, pokemon) {
    super(parentElement, "pokemonCard", htmlTag);

    this.pokemon = pokemon;
    this.getDrawHtml();
  }

  getDrawHtml() {
    this.element.innerHTML = `
    <div>
      <img src="${this.pokemon.sprites.front_default}" alt="">
      <div>
        <h3>ID: ${this.pokemon.id}</h3>
        <h4>${this.pokemon.name}</h4>
      </div>
    </div>`;
  }
}

export default PokemonCard;
