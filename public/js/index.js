import PokemonCard from "./Components/Card.js";
import PageComponent from "./Components/PageComponent.js";

new PageComponent(document.body);

const start = 1;
const finish = 20;

for (let i = start; i <= finish; i++) {
  const pokemonID = i;

  const pokemonAPI = async () => {
    const pokemonArray = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonID.toString()}`
    );
    const pokemonObject = await pokemonArray.json();

    new PokemonCard("div", pokemonObject);
  };
  pokemonAPI();
}
