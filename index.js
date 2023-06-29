import axios from "axios";
import { pokemons } from "./pokeAPI/datosPokemon.js";
import { urls } from "./randomJsonAPI/datosRandom.js";

const realizarLlamadasRandomApi = async () => {
  for (const url of urls) {
    console.log("URL:" + url);
    await axios.get(url).then(({ data }) => console.log(data));
  }
};

const getRandomPokemon = () => {
  const URL = "https://pokeapi.co/api/v2/pokemon/";

  const index = Math.floor(Math.random() * (pokemons.length - 0));
  const pokemon = pokemons[index];

  axios
    .get(URL + pokemon)
    .then(({ data: { name, id, types } }) =>
      console.log(`
----- [${id}] ${name} ------
${name} es un pokemon tipo ${types
        .map((a) => a.type.name)
        .join("/")}. Es el pokemon N° ${id} en la pokedex nacional.
    `)
    )
    .catch((error) => console.log(error));
};

getRandomPokemon();
realizarLlamadasRandomApi();
