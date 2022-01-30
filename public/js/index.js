import PokemonCard from "./Components/Card.js";

const start = 1;
const finish = 100;

for (let i = start; i <= finish; i++) {
  const pokemonID = i;

  const pokemonAPI = async () => {
    const pokemonArray = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonID.toString()}`
    );
    const pokemonObject = await pokemonArray.json();
    console.log(pokemonObject);

    new PokemonCard(document.body, "div", pokemonObject);
  };
  pokemonAPI();
}

// pokemonAPI();
